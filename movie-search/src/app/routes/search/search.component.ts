import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	@Input() public searchString: string = '';
	@Input() public isAdult: boolean = false;
	@Input() public language: string = 'en';
	@Input() public type: string = 'movie';

	public searchResults?: {};
	public typeSearch: boolean = true;

	public isSubmitted: boolean = false;

	constructor(private repositoryService: RepositoryService) {}

	public submitForm(form: NgForm): boolean | undefined {
		this.isSubmitted = true;

		if (!form.valid) {
			return false;
		} else {
			this.getSearchResults();
		}
	}

	public getSearchResults(): void {
		this.repositoryService
			.search(this.type, this.searchString, this.isAdult, this.language)
			.subscribe((res: any) => {
				this.type === 'movie'
					? (this.typeSearch = true)
					: (this.typeSearch = false);
				this.searchResults = res.results;
			});
	}
}
