import { Component } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-genres',
	templateUrl: './genres.component.html',
	styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
	public genres: {};

	constructor(private repositoryService: RepositoryService) {
		this.repositoryService.getGenres().subscribe((res: {}) => {
			const genresLimit: number = 20;
			this.genres = res['genres'].slice(0, genresLimit);
		});
	}
}
