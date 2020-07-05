import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	@Input() public movie?: IMovie;

	@Input() public cast: [] = [];

	public newMovie?: IMovie[];
	public popularMovie?: IMovie[];
	public limitNewMovies: number = 1;
	public limit: number = 3;
	public limitActors: number = 6;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getNewMovies().subscribe((res: any) => {
			const moviesArray: IMovie[] = [];
			moviesArray.push(res['results'][Math.floor(Math.random() * res['results'].length)]);
			this.newMovie = moviesArray;
		});

		this.repositoryService.getPopularMovies().subscribe((res: any) => {
			this.popularMovie = res['results'].slice(0, this.limit);
		});

		this.repositoryService.getPopularActors().subscribe((res: any) => {
			res['results'] = res['results'].filter((item: any) => {
				return item.popularity;
			});
			this.cast = res['results'].slice(0, this.limitActors);
		});
	}
}
