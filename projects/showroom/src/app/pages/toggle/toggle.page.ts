import { Component } from '@angular/core';
import { ToggleComponent } from '../../../../../ui-components/src/lib/components/toggle/toggle.component';

@Component({
    selector: 'page-toggle',
    templateUrl: './toggle.page.html',
    styleUrls: ['./toggle.page.scss'],
    imports: [ToggleComponent]
})
export class TogglePageComponent {
}
