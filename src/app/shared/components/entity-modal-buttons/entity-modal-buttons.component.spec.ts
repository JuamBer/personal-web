import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityModalButtonsComponent } from './entity-modal-buttons.component';

describe('EntityModalButtonsComponent', () => {
  let component: EntityModalButtonsComponent<any>;
  let fixture: ComponentFixture<EntityModalButtonsComponent<any>>;

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
