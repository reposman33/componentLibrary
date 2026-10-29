import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.scss'],
    standalone: false
})
export class NavListComponent {
	@Input() public type: string = '';
}
