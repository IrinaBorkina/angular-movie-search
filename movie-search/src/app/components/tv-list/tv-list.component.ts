import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-tv-list',
	templateUrl: './tv-list.component.html',
	styleUrls: ['./tv-list.component.scss'],
})
export class TVListComponent implements OnInit {
	public title: string;
	public tvShows: {};
	public id: number;
	public delayTime: number = 500;

	constructor(
		// public title: string,
		// public movies: {},
		// public id: number,
		// public delayTime: number = 500,
		private repositoryService: RepositoryService,
		private router: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.repositoryService
			.getPopularTVShows()
			.pipe(delay(this.delayTime))
			.subscribe((res: any) => {
				this.tvShows = res['results'];
			});

		this.router.params.subscribe((params: Params) => {
			// console.log(params);
			this.id = params['id'];
			this.title = params['name'];
			this.repositoryService
				.getTVShowsByGenre(this.id)
				.subscribe((res: any) => {
					this.tvShows = res['results'];
					// console.log(res);
				});
		});
	}
}
