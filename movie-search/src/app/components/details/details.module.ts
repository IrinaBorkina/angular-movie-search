import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';

@NgModule({
	declarations: [DetailsComponent],
	imports: [CommonModule, DetailsRoutingModule],
	exports: [],
	providers: [],
	bootstrap: [DetailsComponent],
})
export class DetailsModule {}
