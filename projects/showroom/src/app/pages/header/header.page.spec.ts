import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPage } from './header.page';

describe('HeaderPage', () => {
	let component: HeaderPage;
	let fixture: ComponentFixture<HeaderPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderPage],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
