import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'lib-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
	@Input() title: string = '';
	@Input() subTitle: string = '';

	public titleSeparator: string = '|';

	constructor() {}

	ngOnInit(): void {}
}
