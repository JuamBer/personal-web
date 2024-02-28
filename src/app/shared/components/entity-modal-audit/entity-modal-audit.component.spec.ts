import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { AuditFields } from '../../models/audit-fields.model';
import { PublicLanguageStateModule } from '../../state/languages/public-language-state.module';
import { EntityModalAuditComponent } from './entity-modal-audit.component';

describe('EntityModalAuditComponent', () => {
  let component: EntityModalAuditComponent<AuditFields>;
  let fixture: ComponentFixture<EntityModalAuditComponent<AuditFields>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityModalAuditComponent],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot(),
        PublicLanguageStateModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityModalAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
