import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ArticleModule, ImageModule } from '@ui-components';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ArticleModule,
        ImageModule], providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())] })
export class AppModule {}
