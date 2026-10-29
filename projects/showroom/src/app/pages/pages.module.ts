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
import { HeaderPageComponent } from './header/header.page';
import { LogoComponent } from './logo/logo.component';
import { TabGroupPageComponent } from './tab-group/tab-group.page';
import { ArticlePageComponent } from './article/article.page';
import { ImagePageComponent } from './image/image.page';
import { TextPageComponent } from './text/text.page';
import { DemoComponentsModule } from '../components/components.module';
import { TogglePageComponent } from './toggle/toggle.page';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({ declarations: [
        HeaderPageComponent,
        LogoComponent,
        TabGroupPageComponent,
        ArticlePageComponent,
        ImagePageComponent,
        TextPageComponent,
        TogglePageComponent,
    ], imports: [DemoComponentsModule,
        ArticleModule,
        CommonModule,
        FormsModule,
        HeaderModule,
        ImageModule,
        LogoModule,
        RouterModule,
        TabGroupModule,
        TextModule,
        ToggleModule],
        providers: [provideHttpClient(withInterceptorsFromDi())] })
export class PagesModule {}
