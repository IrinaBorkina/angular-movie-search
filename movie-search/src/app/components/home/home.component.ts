import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	@Input() public movie: Movie;

	public newMovie: {};
	public popularMovie: {};
	public recommendMovie: {};
	public popularTV: {};
	public limit: number = 1;
	public limitTV: number = 2;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getNewMovies().subscribe((res: any) => {
			this.newMovie =  res['results'].slice(0, this.limit);
				// this.newMovie =
				// 	res['results'][
				// 		Math.floor(Math.random() * res['results'].length)
				// 	];
				// console.log(res['results'][Math.floor(Math.random() * res['results'].length)]);
		});
		this.repositoryService.getPopularMovies().subscribe((res: {}) => {
			this.popularMovie = res['results'].slice(0, this.limit);
		});
		this.repositoryService.getTrending().subscribe((res: {}) => {
			this.recommendMovie = res['results'].slice(0, this.limit);
		});
		this.repositoryService.getPopularTVShows().subscribe((res: {}) => {
			this.popularTV = res['results'].slice(0, this.limitTV);
		});
	}
}
