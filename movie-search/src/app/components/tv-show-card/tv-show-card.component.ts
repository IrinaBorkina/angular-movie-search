import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-tv-show-card',
	templateUrl: './tv-show-card.component.html',
	styleUrls: ['./tv-show-card.component.scss'],
})
export class TvShowCardComponent  {
	@Input() public movie: any;
}
