import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-movies-genres',
	templateUrl: './movies-genres.component.html',
	styleUrls: ['./movies-genres.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesGenresComponent {
	@Input() public genres: {} = {};
}
