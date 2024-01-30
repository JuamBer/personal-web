import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { TranslatePipeStub } from 'src/app/shared/tests/stubs';
import { CvComponent } from './cv.component';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvComponent, TranslatePipeStub],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadCV method', () => {
    spyOn(component, 'downloadCV');
    component.downloadCV();
    expect(component.downloadCV).toHaveBeenCalled();
  });

  it('should call downloadCV method when button is clicked', () => {
    spyOn(component, 'downloadCV');
    const button = fixture.debugElement.query(By.css('.button'));
    button.triggerEventHandler('click', null);
    expect(component.downloadCV).toHaveBeenCalled();
  });
});
