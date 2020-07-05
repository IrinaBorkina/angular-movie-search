import { Component, OnInit, OnDestroy } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IMovie } from './../../../models/movie';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
	public subscription$?: Subscription;
	public details$?: Observable<IMovie>;

	public link?: SafeResourceUrl;
	public cast?: [];
	public castLimit: number = 6;
	public similarMovies?: [];
	public similarMoviesLimit: number = 4;
	public reviews?: [];
	public reviewsLimit: number = 5;

	public id?: number;

	public iframe?: HTMLElement | null;
	public poster?: HTMLElement | null;
	public movieTitle?: HTMLElement | null;

	constructor(
		private route: ActivatedRoute,
		private repositoryService: RepositoryService,
		private sanitizer: DomSanitizer
	) {}

	public ngOnInit(): void {
		this.subscription$ = this.route.params.subscribe((params: Params) => {
			this.id = params['id'];

			this.repositoryService
				.getMovieVideos(this.id)
				.subscribe((res: any) => {
					this.link = this.sanitizer.bypassSecurityTrustResourceUrl(
						`https://www.youtube.com/embed/${res['results'][0]['key']}`
					);
				});

			this.repositoryService
				.getMovieCredits(this.id)
				.subscribe((res: any) => {
					res['cast'] = res['cast'].filter((item: any) => {
						return item.profile_path;
					});
					this.cast = res['cast'].slice(0, this.castLimit);
				});

			this.repositoryService
				.getSimilarMovies(this.id)
				.subscribe((res: any) => {
					this.similarMovies = res['results'].slice(
						0,
						this.similarMoviesLimit
					);
				});

			this.repositoryService
				.getMovieReviews(this.id)
				.subscribe((res: any) => {
					this.reviews = res['results'].slice(0, this.reviewsLimit);
				});

			this.details$ = this.repositoryService.getMovieDetails(this.id);
		});
	}

	public ngOnDestroy(): void {
		if (this.subscription$) {
			this.subscription$.unsubscribe();
		}
	}

	public showTrailer(): void {
		this.iframe = document.getElementById('frame');
		this.poster = document.getElementById('img');
		this.movieTitle = document.getElementById('movie-header');
		if (!!this.iframe && !!this.poster && !!this.movieTitle) {
			this.poster.style.display = 'none';
			this.movieTitle.style.display = 'none';
			this.iframe.style.display = 'block';
		}
	}
}
