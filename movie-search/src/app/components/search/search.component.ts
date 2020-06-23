import { Component, Input } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	@Input() public searchStr: string;
	public searchRes: {};

	constructor(private repositoryService: RepositoryService) {}

	public getSearchResults(): void {
		console.log('search');
		this.repositoryService
			.searchMovies(this.searchStr)
			.subscribe((res: any) => {
				return (this.searchRes = res.results);
			});
	}
}
