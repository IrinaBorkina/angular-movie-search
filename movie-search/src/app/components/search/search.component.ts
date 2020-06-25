import { Component, Input, Inject } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	@Input() public searchString: string;
	public searchResults: {};

	constructor(
		// @Input() public searchString: string,
		// public searchResults: {},
		private repositoryService: RepositoryService
	) {}

	public getSearchResults(): void {
		this.repositoryService
			.searchMovies(this.searchString)
			.subscribe((res: any) => {
				return (this.searchResults = res.results);
			});
	}
}
