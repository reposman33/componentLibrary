import { Component, computed, input, model } from '@angular/core';
@Component({
    selector: 'lib-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
	title = input<string>('title')
	section = input<string>('section')
	selectedSection = model<string>()

	protected selected = computed(() => this.section() === this.selectedSection());

	handleClick(section: string) {
		this.selectedSection.set(section);
	}
}
