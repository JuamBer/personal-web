import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableHeaderColumnComponent } from './generic-table-header-column.component';

describe('GenericTableHeaderColumnComponent', () => {
  let component: GenericTableHeaderColumnComponent<unknown>;
  let fixture: ComponentFixture<GenericTableHeaderColumnComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericTableHeaderColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTableHeaderColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
