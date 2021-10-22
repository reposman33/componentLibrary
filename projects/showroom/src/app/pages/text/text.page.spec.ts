import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPage } from './text.page';

describe('TextPage', () => {
  let component: TextPage;
  let fixture: ComponentFixture<TextPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
