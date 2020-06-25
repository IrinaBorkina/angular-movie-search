import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
	public title: string;
	public movies: {};
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
			.getPopularMovies()
			.pipe(delay(this.delayTime))
			.subscribe((res: any) => {
				this.movies = res['results'];
			});

		this.router.params.subscribe((params: Params) => {
			this.id = params['id'];
			this.title = params['name'];
			this.repositoryService
				.getMoviesByGenre(this.id)
				.subscribe((res: any) => {
					this.movies = res['results'];
				});
		});
	}
}
