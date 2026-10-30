import { Component } from '@angular/core';

@Component({
    selector: 'lib-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    
    standalone: false
})
export class ToggleComponent {
  toggleDown: boolean = false;
}
