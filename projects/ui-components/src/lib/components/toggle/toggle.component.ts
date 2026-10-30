import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'lib-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    imports: [NgClass]
})
export class ToggleComponent {
  toggleDown: boolean = false;
}
