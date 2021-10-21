import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePage } from './image.page';

describe('ImagePage', () => {
  let component: ImagePage;
  let fixture: ComponentFixture<ImagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
