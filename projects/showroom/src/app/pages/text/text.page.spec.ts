import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPageComponent } from './text.page';

describe('TextPageComponent', () => {
  let component: TextPageComponent;
  let fixture: ComponentFixture<TextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
