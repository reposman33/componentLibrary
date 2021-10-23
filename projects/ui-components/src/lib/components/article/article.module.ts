import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * TODO: Find out why uncommenting below import from api-modules library gives error as
 *
 * projects/api-modules/src/lib/services/api.service.ts:1:1 - error TS6059:
 * File 'F:/www/personal-website/projects/api-modules/src/lib/services/api.service.ngtypecheck.ts'
 * is not under 'rootDir'
 * 'F:\www\personal-website\projects\ui-components\src'.
 * 'rootDir' is expected to contain all source files.
 *
 */
// import { ApiModule } from '@api-modules';
import { ArticleComponent } from './article.component';

@NgModule({
	declarations: [ArticleComponent],
	exports: [ArticleComponent],
	imports: [CommonModule],
})
export class ArticleModule {}
