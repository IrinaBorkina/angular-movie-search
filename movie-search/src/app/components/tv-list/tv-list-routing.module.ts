import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TVListComponent } from './tv-list.component';

const routes: Routes = [
	{
		path: 'tv-shows/:id/:name',
		component: TVListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TVListRoutingModule {}
