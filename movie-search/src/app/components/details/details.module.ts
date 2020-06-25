import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';
import { CastComponent } from '../cast/cast.component';

@NgModule({
	declarations: [DetailsComponent, CastComponent],
	imports: [CommonModule, DetailsRoutingModule],
	exports: [],
	providers: [],
	bootstrap: [DetailsComponent],
})
export class DetailsModule {}
