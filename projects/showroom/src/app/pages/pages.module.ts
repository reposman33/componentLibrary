import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
	ArticleModule,
	HeaderModule,
	ImageModule,
	LogoModule,
	TabGroupModule,
} from '@ui-components/lib';
import { HeaderPage } from './header/header.page';
import { LogoComponent } from './logo/logo.component';
import { TabGroupPage } from './tab-group/tab-group.page';
import { ArticlePage } from './article/article.page';
import { ImagePage } from './image/image.page';

@NgModule({
	declarations: [HeaderPage, LogoComponent, TabGroupPage, ArticlePage, ImagePage],
	exports: [],
	imports: [
		ArticleModule,
		CommonModule,
		HeaderModule,
		ImageModule,
		LogoModule,
		RouterModule,
		TabGroupModule,
	],
})
export class PagesModule {}
