import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'lib-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
	@Input() public imageUrl!: string;
	@Input() public alt: string = '';

	constructor() {}

	ngOnInit(): void {}
}
