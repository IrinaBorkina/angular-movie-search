import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-tv-list',
	templateUrl: './tv-list.component.html',
	styleUrls: ['./tv-list.component.scss'],
})
export class TVListComponent implements OnInit {
	public title: string;
	public tvShows: {};
	public id: number;

	constructor(
		private repositoryService: RepositoryService,
		private router: ActivatedRoute
	) {
		this.repositoryService.getPopularTVShows().subscribe((res: {}) => {
			this.tvShows = res['results'];
		});
	}

	public ngOnInit(): void {
		this.router.params.subscribe((params: Params) => {
			this.id = params['id'];
			this.title = params['name'];
			this.repositoryService
				.getTVShowsByGenre(this.id)
				.subscribe((res: {}) => {
					this.tvShows = res['results'];
				});
		});
	}
}
