import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-main-movie',
	templateUrl: './main-movie.component.html',
	styleUrls: ['./main-movie.component.scss'],
})
export class MainMovieComponent {
	@Input() public movie: Movie;

	public newList: {};
	public limit: number = 1;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getNewMovies().subscribe((res: {}) => {
			this.newList = res['results'].slice(0, this.limit);
		});
	}
}
