import { Component } from '@angular/core';
import { ArticleComponent } from '../../../../../ui-components/src/lib/components/article/article.component';

@Component({
    selector: 'app-article',
    templateUrl: './article.page.html',
    styleUrls: ['./article.page.scss'],
    imports: [ArticleComponent]
})
export class ArticlePageComponent {
}
