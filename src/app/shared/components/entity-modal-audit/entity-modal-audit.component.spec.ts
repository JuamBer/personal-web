import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityModalAuditComponent } from './entity-modal-audit.component';

describe('EntityModalAuditComponent', () => {
  let component: EntityModalAuditComponent<any>;
  let fixture: ComponentFixture<EntityModalAuditComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityModalAuditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityModalAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
