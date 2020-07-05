import {
	Component,
	Input,
	OnInit,
	ChangeDetectionStrategy,
} from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { IMovie } from './../../models/movie';
import { ITV } from 'src/app/models/tv';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnInit {
	@Input() public movie?: IMovie;

	public watchList?: any;
	public isWatchList: boolean = false;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.watchListArray.subscribe(
			(list: (IMovie[] | ITV[])) => (this.watchList = list)
		);
	}

	public watchListThis = () => {
		this.isWatchList = !this.isWatchList;
		this.watchList.unshift(this.movie);
		this.repositoryService.addToWatchList(this.watchList);
		this.repositoryService.saveWatchList(this.watchList);
	};
}
