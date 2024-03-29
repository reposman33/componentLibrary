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
  ToggleModule,
} from '@ui-components';
import { HeaderPage } from './header/header.page';
import { LogoComponent } from './logo/logo.component';
import { TabGroupPage } from './tab-group/tab-group.page';
import { ArticlePage } from './article/article.page';
import { ImagePage } from './image/image.page';
import { TextPage } from './text/text.page';
import { DemoComponentsModule } from '../components/components.module';
import { TogglePage } from './toggle/toggle.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderPage,
    LogoComponent,
    TabGroupPage,
    ArticlePage,
    ImagePage,
    TextPage,
    TogglePage,
  ],
  imports: [
    DemoComponentsModule,
    ArticleModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    HttpClientModule,
    ImageModule,
    LogoModule,
    RouterModule,
    TabGroupModule,
    TextModule,
    ToggleModule,
  ],
})
export class PagesModule {}
