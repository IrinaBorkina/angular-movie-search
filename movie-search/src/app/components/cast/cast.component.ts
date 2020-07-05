import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-cast',
	templateUrl: './cast.component.html',
	styleUrls: ['./cast.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CastComponent {
	@Input() public cast: [] = [];
}
