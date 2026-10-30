import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.page.html',
    styleUrls: ['./article.page.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ArticlePageComponent {
}
