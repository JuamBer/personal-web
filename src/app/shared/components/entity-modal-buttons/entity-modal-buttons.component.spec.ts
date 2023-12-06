import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityModalButtonsComponent } from './entity-modal-buttons.component';

describe('EntityModalButtonsComponent', () => {
  let component: EntityModalButtonsComponent<unknown>;
  let fixture: ComponentFixture<EntityModalButtonsComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityModalButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityModalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
