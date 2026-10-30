import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageComponent } from './header.page';

describe('HeaderPageComponent', () => {
	let component: HeaderPageComponent;
	let fixture: ComponentFixture<HeaderPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    imports: [HeaderPageComponent],
}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
