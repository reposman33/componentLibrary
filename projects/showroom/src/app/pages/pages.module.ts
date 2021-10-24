import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
	ArticleModule,
	HeaderModule,
	ImageModule,
	LogoModule,
	TabGroupModule,
	TextModule,
} from '@ui-components';
import { HeaderPage } from './header/header.page';
import { LogoComponent } from './logo/logo.component';
import { TabGroupPage } from './tab-group/tab-group.page';
import { ArticlePage } from './article/article.page';
import { ImagePage } from './image/image.page';
import { TextPage } from './text/text.page';
import { DemoComponentsModule } from '../components/components.module';

@NgModule({
	declarations: [
		HeaderPage,
		LogoComponent,
		TabGroupPage,
		ArticlePage,
		ImagePage,
		TextPage,
	],
	imports: [
		DemoComponentsModule,
		ArticleModule,
		CommonModule,
		HeaderModule,
		ImageModule,
		LogoModule,
		RouterModule,
		TabGroupModule,
		TextModule,
	],
})
export class PagesModule {}
