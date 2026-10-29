import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageComponentComponent } from './article.page';

describe('ArticlePageComponent', () => {
	let component: ArticlePageComponent;
	let fixture: ComponentFixture<ArticlePageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ArticlePageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ArticlePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
