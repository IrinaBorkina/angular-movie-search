import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
	@Input() public searchResults: {} | undefined;
	@Input() public isMovieSearch?: boolean;
}
