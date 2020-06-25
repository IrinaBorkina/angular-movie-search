import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-movie-detailed',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
	public subscription: Subscription;
	public details$: Observable<any>;

	public link: any;
	public cast: {};
	public castLimit: number = 6;

	public id: number;

	constructor(
		// public details$: Observable<any>,
		private route: ActivatedRoute,
		private repositoryService: RepositoryService,
		private sanitizer: DomSanitizer
	) {
		this.subscription = this.route.params.subscribe((params: Params) => {
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
				.subscribe((res: {}) => {
					res['cast'] = res['cast'].filter((item: any) => {
						return item.profile_path;
					});
					this.cast = res['cast'].slice(0, this.castLimit);
				});
		});
	}

	public ngOnInit(): void {
		this.details$ = this.repositoryService.getMovieDetails(this.id);
	}
}
