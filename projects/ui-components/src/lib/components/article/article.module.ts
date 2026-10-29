import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ToggleModule } from '../toggle/toggle.module';

@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  imports: [CommonModule, ToggleModule],
})
export class ArticleModule {}
