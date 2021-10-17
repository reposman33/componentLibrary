import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupPage } from './tab-group.page';

describe('TabGroupPage', () => {
	let component: TabGroupPage;
	let fixture: ComponentFixture<TabGroupPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TabGroupPage],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TabGroupPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
