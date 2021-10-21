import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SHOWROOM PAGES
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';

import { PagesModule } from './pages/pages.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderPage } from './pages/header/header.page';
import { LogoComponent } from './pages/logo/logo.component';
import { TabGroupPage } from './pages/tab-group/tab-group.page';
import { ArticlePage } from './pages/article/article.page';
import { ImagePage } from './pages/image/image.page';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', pathMatch: 'full', component: LandingComponent },
			{ path: 'article', component: ArticlePage },
			{ path: 'header', component: HeaderPage },
			{ path: 'image', component: ImagePage },
			{ path: 'logo', component: LogoComponent },
			{ path: 'tabgroup', component: TabGroupPage },
		],
	},
];

@NgModule({
	declarations: [],
	imports: [LayoutModule, PagesModule, RouterModule.forRoot(routes)],
	exports: [LayoutModule],
})
export class AppRoutingModule {}
