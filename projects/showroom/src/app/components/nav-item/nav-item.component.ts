import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html',
	styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
	@Input() public url!: string;
}
