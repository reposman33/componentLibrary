import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'lib-tab',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
	@Input() public title!: string;
	@Input() public section!: string;
	@Input() public selectedTab: string = '';

	@Output() navigate: EventEmitter<string> = new EventEmitter();
	@Output() select: EventEmitter<string> = new EventEmitter();

	public selected: boolean = false;

	ngOnChanges(changes: SimpleChanges) {
		this.selected = changes.selectedTab.currentValue === this.title;
	}

	handleClick(section: string) {
		this.select.emit(this.title);
		this.navigate.emit(section);
	}
}
