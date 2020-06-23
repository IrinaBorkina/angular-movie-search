import { createAction, props, ActionCreator } from '@ngrx/store';
import { Movie } from 'src/app/models/movie';
import { TypedAction } from '@ngrx/store/src/models';

// export const create = createAction('[TODO] Add', props<{ title: string }>());
// export const remove = createAction('[TODO] Delete', props<{ id: number }>());

export const search = createAction('[Movie] Search');

export const searchSuccess = createAction(
	'[Movie] Search (Success)',
	props<{ movies: Movie[] }>()
);

export const searchError = createAction('[Movie] Search (Error)');
