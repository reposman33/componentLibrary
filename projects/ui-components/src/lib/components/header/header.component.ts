import { Component, Input } from '@angular/core';

@Component({
	selector: 'lib-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@Input() title!: string;
	@Input() subTitle: string = '';
	@Input() align: 'left' | 'center' | 'right' | 'around' = 'center';
	public separator = ' | ';
}
