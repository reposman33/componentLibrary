import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changes class when clicked open', () => {
    const element = fixture.debugElement.query(By.css('span'));
    element.triggerEventHandler('click', null);
    fixture.detectChanges();

    console.info(element.nativeElement.className);
    expect(element.nativeElement.className).toContain('caret--down');
  });

  it('changes class when clicked closed', () => {
    const element = fixture.debugElement.query(By.css('span'));
    // click once to open
    element.triggerEventHandler('click', null);
    fixture.detectChanges();
    // click again to close
    element.triggerEventHandler('click', null);
    fixture.detectChanges();

    console.info(element.nativeElement.className);
    expect(element.nativeElement.className).toContain('caret--left');
  });
});
