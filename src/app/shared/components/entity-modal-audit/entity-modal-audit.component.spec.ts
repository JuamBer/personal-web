import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFields } from '../../models/audit-fields.model';
import { EntityModalAuditComponent } from './entity-modal-audit.component';

describe('EntityModalAuditComponent', () => {
  let component: EntityModalAuditComponent<AuditFields>;
  let fixture: ComponentFixture<EntityModalAuditComponent<AuditFields>>;

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
