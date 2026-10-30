import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'page-toggle',
    templateUrl: './toggle.page.html',
    styleUrls: ['./toggle.page.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TogglePageComponent {
}
