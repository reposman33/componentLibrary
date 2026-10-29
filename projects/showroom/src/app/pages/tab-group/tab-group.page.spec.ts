import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupPageComponent } from './tab-group.page';

describe('TabGroupPageComponent', () => {
	let component: TabGroupPageComponent;
	let fixture: ComponentFixture<TabGroupPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TabGroupPageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TabGroupPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
