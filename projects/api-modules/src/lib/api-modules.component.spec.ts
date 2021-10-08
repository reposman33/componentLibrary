import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiModulesComponent } from './api-modules.component';

describe('ApiModulesComponent', () => {
  let component: ApiModulesComponent;
  let fixture: ComponentFixture<ApiModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
