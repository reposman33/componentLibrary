import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [NgClass]
})
export class HeaderComponent {
  title = input<string>('')
  subTitle = input<string>('')
  align = input<Align>('left')
  public separator = ' | ';
}

export type Align = 'left' | 'center' | 'right' | 'around';
