import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleModule, ImageModule } from '@ui-components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    HttpClientModule,
    ImageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
