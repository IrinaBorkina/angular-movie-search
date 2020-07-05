import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-new-list',
	templateUrl: './new-list.component.html',
	styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
	public newList?: {};
	public limit: number = 8;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getNewMovies().subscribe((res: any) => {
			this.newList = res['results'].slice(0, this.limit);
		});
	}
}
