import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { RepositoryService } from 'src/app/services/repository.service';
import {
	search,
	searchSuccess,
	searchError,
} from '../actions/movie-search.actions';
import { Movie } from 'src/app/models/movie';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class MovieSearchEffects {
	public searchString: string;

	@Effect()
	public searchMovies$ = this.actions$.pipe(
		ofType(search),
		switchMap((action) =>
			this.repositoryService.searchMovies(this.searchString).pipe(
				map((movies: any) => searchSuccess({ movies })),
				catchError(() => of(searchError()))
			)
		)
	);

	constructor(
		// public searchString: string,
		private actions$: Actions,
		private repositoryService: RepositoryService
	) {}
}
