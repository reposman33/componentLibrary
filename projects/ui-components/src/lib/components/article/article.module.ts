import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ToggleModule } from '../toggle';

@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  imports: [CommonModule, ToggleModule],
})
export class ArticleModule {}
