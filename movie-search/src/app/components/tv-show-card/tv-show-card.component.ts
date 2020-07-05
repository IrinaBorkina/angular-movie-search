import {
	Component,
	Input,
	OnInit,
	ChangeDetectionStrategy,
} from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ITV } from 'src/app/models/tv';
import { IMovie } from './../../models/movie';

@Component({
	selector: 'app-tv-show-card',
	templateUrl: './tv-show-card.component.html',
	styleUrls: ['./tv-show-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowCardComponent implements OnInit {
	@Input() public movie?: ITV;

	public watchList: any;
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
