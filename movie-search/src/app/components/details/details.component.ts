import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-movie-detailed',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
	public details$: Observable<any>;

	constructor(
		private route: ActivatedRoute,
		private repositoryService: RepositoryService
	) {}

	public ngOnInit(): void {
		this.details$ = this.route.queryParams.pipe(
			map((queryParams: Params) => queryParams['movieId']),

			switchMap((imdbId: number) =>
				this.repositoryService.getMovie(imdbId)
			)
		);
	}
}
