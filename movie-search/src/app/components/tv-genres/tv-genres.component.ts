import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-tv-genres',
  templateUrl: './tv-genres.component.html',
  styleUrls: ['./tv-genres.component.scss']
})
export class TvGenresComponent {
	public genres: {};

	constructor(private repositoryService: RepositoryService) {
		this.repositoryService.getTVShowsGenres().subscribe((res: {}) => {
			const genresLimit: number = 20;
			this.genres = res['genres'].slice(0, genresLimit);
		});
	}

}
