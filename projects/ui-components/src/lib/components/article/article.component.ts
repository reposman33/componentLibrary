import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lib-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ArticleComponent implements OnInit {
  @Input() subTitle: string = '';
  @Input() title: string = '';
  @Input() toggle: boolean = false;

  public drawerOpen: boolean = false;

  ngOnInit(): void {}
}
