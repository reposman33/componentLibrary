import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
    
    standalone: false
})
export class TextComponent {
	@Input() title: string = '';
	@Input() subTitle: string = '';

	public titleSeparator: string = '|';
}
