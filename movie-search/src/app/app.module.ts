import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { RepositoryService } from './services/repository.service';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './components/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ActorDetailsComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpClientModule,
		FormsModule,
		RouterModule,
		AppRoutingModule,
		SharedModule,
	],
	providers: [RepositoryService],
	bootstrap: [AppComponent],
})
export class AppModule {}
