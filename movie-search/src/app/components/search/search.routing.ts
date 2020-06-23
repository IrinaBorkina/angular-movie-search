import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
	{
		path: 'search/',
		component: SearchComponent,
		children: [
			{
				path: 'details/:id',
				component: DetailsComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SearchRoutingModule {}
