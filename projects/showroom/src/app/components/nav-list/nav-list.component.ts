import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavListComponent {
	@Input() public type: string = '';
}
