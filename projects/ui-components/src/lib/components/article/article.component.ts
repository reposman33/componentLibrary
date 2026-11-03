import { Component, input, signal } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'lib-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
    imports: [ToggleComponent, NgClass]
})
export class ArticleComponent {
  subTitle = input<string>('');
  title = input<string>('');
  toggle = input<boolean>(false);
  public drawerOpen = signal<boolean>(false);
}
