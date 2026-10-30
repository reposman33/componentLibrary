import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lib-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextComponent {
	@Input() title: string = '';
	@Input() subTitle: string = '';

	public titleSeparator: string = '|';
}
