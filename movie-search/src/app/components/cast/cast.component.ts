import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-cast',
	templateUrl: './cast.component.html',
	styleUrls: ['./cast.component.scss'],
})
export class CastComponent {
	@Input() public cast: [];
}
