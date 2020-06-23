import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-popular-list',
	templateUrl: './popular-list.component.html',
	styleUrls: ['./popular-list.component.scss'],
})
export class PopularListComponent implements OnInit {
	public popularList: {};
	public limit: number = 8;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getPopularMovies().subscribe((res: {}) => {
			this.popularList = res['results'].slice(0, this.limit);
		});
	}
}
