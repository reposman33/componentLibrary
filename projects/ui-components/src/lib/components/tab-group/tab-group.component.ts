import { Component, input, signal } from '@angular/core';
import { Tab } from '@ui-components';
import { TabComponent } from '../tab/tab.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'lib-tab-group',
    templateUrl: './tab-group.component.html',
    styleUrls: ['./tab-group.component.scss'],
    imports: [TabComponent, RouterOutlet]
})
export class TabGroupComponent {
	tabs = input<Tab[]>([]);
	selectedTabsection = signal<string>('bio');
}
