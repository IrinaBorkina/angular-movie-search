import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IGenres } from 'src/app/models/genres';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
	public title?: string;
	public movies?: {};
	public genres?: {};
	public id?: number;

	constructor(
		private repositoryService: RepositoryService,
		private router: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.repositoryService.getMoviesGenres().subscribe((res: IGenres) => {
			const genresLimit: number = 20;
			this.genres = res['genres'].slice(0, genresLimit);
		});

		this.router.params.subscribe((params: Params) => {
			this.id = params['id'];
			this.title = params['name'];

			if (this.id !== undefined) {
				this.repositoryService
					.getMoviesByGenre(this.id)
					.subscribe((res: any) => {
						this.movies = res['results'];
					});
			} else {
				this.repositoryService
					.getPopularMovies()
					.subscribe((res: any) => {
						this.movies = res['results'];
					});
			}
		});
	}
}
