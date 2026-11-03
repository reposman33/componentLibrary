import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderPageComponent } from './pages/header/header.page';
import { LogoComponent } from './pages/logo/logo.component';
import { TabGroupPageComponent } from './pages/tab-group/tab-group.page';
import { ArticlePageComponent } from './pages/article/article.page';
import { ImagePageComponent } from './pages/image/image.page';
import { TextPageComponent } from './pages/text/text.page';
import { TogglePageComponent } from './pages/toggle/toggle.page';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: LandingComponent },
      { path: 'article', component: ArticlePageComponent },
      { path: 'header', component: HeaderPageComponent },
      { path: 'image', component: ImagePageComponent },
      { path: 'logo', component: LogoComponent },
      { path: 'tabgroup', component: TabGroupPageComponent },
      { path: 'text', component: TextPageComponent },
      { path: 'toggle', component: TogglePageComponent },
    ],
  },
];
