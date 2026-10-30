import { Component, Input, OnInit } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'lib-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
    imports: [ToggleComponent, NgClass]
})
export class ArticleComponent implements OnInit {
  @Input() subTitle: string = '';
  @Input() title: string = '';
  @Input() toggle: boolean = false;

  public drawerOpen: boolean = false;

  ngOnInit(): void {}
}
