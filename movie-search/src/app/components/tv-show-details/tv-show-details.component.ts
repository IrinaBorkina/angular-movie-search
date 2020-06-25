import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})

export class TvShowDetailsComponent implements OnInit {
	public subscription: Subscription;
	public detailsTV$: Observable<any>;

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
				.getTVShowVideos(this.id)
				.subscribe((res: any) => {
					this.link = this.sanitizer.bypassSecurityTrustResourceUrl(
						`https://www.youtube.com/embed/${res['results'][0]['key']}`
					);
				});

			this.repositoryService
				.getTVShowCredits(this.id)
				.subscribe((res: {}) => {
					res['cast'] = res['cast'].filter((item: any) => {
						return item.profile_path;
					});
					this.cast = res['cast'].slice(0, this.castLimit);
					console.log(this.cast);
				});
		});
	}

	public ngOnInit(): void {
		this.detailsTV$ = this.repositoryService.getTVShowDetails(this.id);
	}
}
