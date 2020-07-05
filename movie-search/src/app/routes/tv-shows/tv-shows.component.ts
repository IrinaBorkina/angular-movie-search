import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IGenres } from 'src/app/models/genres';

@Component({
	selector: 'app-tv-shows',
	templateUrl: './tv-shows.component.html',
	styleUrls: ['./tv-shows.component.scss'],
})
export class TVShowsComponent implements OnInit {
	public title?: string;
	public tvShows?: {};
	public genres?: {};
	public id?: number;

	constructor(
		private repositoryService: RepositoryService,
		private router: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.repositoryService.getTVShowsGenres().subscribe((res: IGenres) => {
			const genresLimit: number = 20;
			this.genres = res['genres'].slice(0, genresLimit);
		});

		this.router.params.subscribe((params: Params) => {
			this.id = params['id'];
			this.title = params['name'];

			if (this.id !== undefined) {
				this.repositoryService
					.getTVShowsByGenre(this.id)
					.subscribe((res: any) => {
						this.tvShows = res['results'];
					});
			} else {
				this.repositoryService
					.getPopularTVShows()
					.subscribe((res: any) => {
						this.tvShows = res['results'];
					});
			}
		});
	}
}
