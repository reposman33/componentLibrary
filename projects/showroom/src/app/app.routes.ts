import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent) },
      { path: 'article', loadComponent: () => import('./pages/article/article.page').then(m => m.ArticlePageComponent) },
      { path: 'header', loadComponent: () => import('./pages/header/header.page').then(m => m.HeaderPageComponent) },
      { path: 'image',  loadComponent: () => import('./pages/image/image.page').then(m => m.ImagePageComponent) },
      { path: 'logo', loadComponent: () => import('./pages/logo/logo.component').then(m => m.LogoComponent) },
      { path: 'tabgroup', loadComponent: () => import('./pages/tab-group/tab-group.page').then(m => m.TabGroupPageComponent) },
      { path: 'text', loadComponent: () => import('./pages/text/text.page').then(m => m.TextPageComponent) },
      { path: 'toggle', loadComponent: () => import('./pages/toggle/toggle.page').then(m => m.TogglePageComponent) },
    ],
  },
];
