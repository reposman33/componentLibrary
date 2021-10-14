import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './layout/layout.component';

import { LandingComponent } from './pages/landing/landing.component';
import { HeaderPage } from './pages/header/header.page';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', pathMatch: 'full', component: LandingComponent },
			{ path: 'header', component: HeaderPage },
		],
	},
];

@NgModule({
	declarations: [],
	imports: [LayoutModule, PagesModule, RouterModule.forRoot(routes)],
	exports: [LayoutModule],
})
export class AppRoutingModule {}
