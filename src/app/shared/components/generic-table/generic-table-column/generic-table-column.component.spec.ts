import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableColumnComponent } from './generic-table-column.component';

describe('GenericTableColumnComponent', () => {
  let component: GenericTableColumnComponent<any>;
  let fixture: ComponentFixture<GenericTableColumnComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericTableColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
