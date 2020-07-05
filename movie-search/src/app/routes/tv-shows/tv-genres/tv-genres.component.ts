import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-tv-genres',
	templateUrl: './tv-genres.component.html',
	styleUrls: ['./tv-genres.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvGenresComponent {
	@Input() public genres: {} = {};
}
