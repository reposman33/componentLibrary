import { Component } from '@angular/core';

@Component({
  selector: 'lib-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  toggleDown: boolean = false;
}
