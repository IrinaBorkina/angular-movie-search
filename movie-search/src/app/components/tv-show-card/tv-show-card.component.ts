import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
	selector: 'app-tv-show-card',
	templateUrl: './tv-show-card.component.html',
	styleUrls: ['./tv-show-card.component.scss'],
})
export class TvShowCardComponent implements OnInit {
	@Input() public movie;

	constructor() {}

	ngOnInit(): void {}
}
