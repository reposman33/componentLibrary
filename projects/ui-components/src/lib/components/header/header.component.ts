import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [NgClass]
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() subTitle: string = '';
  @Input() align: Align = 'left';
  public separator = ' | ';
}

export type Align = 'left' | 'center' | 'right' | 'around';
