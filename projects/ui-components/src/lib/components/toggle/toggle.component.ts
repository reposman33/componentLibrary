import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lib-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ToggleComponent {
  toggleDown: boolean = false;
}
