import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableColumnComponent } from './generic-table-column.component';

describe('GenericTableColumnComponent', () => {
  let component: GenericTableColumnComponent<unknown>;
  let fixture: ComponentFixture<GenericTableColumnComponent<unknown>>;

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
