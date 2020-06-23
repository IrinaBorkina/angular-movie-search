import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-recommended-list',
	templateUrl: './recommended-list.component.html',
	styleUrls: ['./recommended-list.component.scss'],
})
export class RecommendedListComponent implements OnInit {
	public recommendList: {};
	public limit: number = 8;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getTrending().subscribe((res: {}) => {
			this.recommendList = res['results'].slice(0, this.limit);
		});
	}
}
