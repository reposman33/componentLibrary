import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-nav-list',
	templateUrl: './nav-list.component.html',
	styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
	@Input() public type: string = '';
}
