import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-actor',
  templateUrl: './popular-actor.component.html',
  styleUrls: ['./popular-actor.component.scss']
})
export class PopularActorComponent {
	@Input() public cast: [] = [];
}
