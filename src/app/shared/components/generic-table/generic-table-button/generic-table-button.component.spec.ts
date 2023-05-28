import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableButtonComponent } from './generic-table-button.component';

describe('GenericTableButtonComponent', () => {
  let component: GenericTableButtonComponent<any>;
  let fixture: ComponentFixture<GenericTableButtonComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericTableButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
