import { NgModule } from '@angular/core';
import { BaseFormModule } from '@app/shared/components/base-form/base-form.module';
import { EntityModalAuditModule } from '@app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from '@app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from '@app/shared/components/generic-table/generic-table.module';
import { TablaGenericaModule } from '@app/shared/components/tabla-generica/tabla-generica.module';
import { BasicModule } from '@app/shared/modules/basic.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { PrimeNgModule } from '@app/shared/modules/primeng.module';
import { AccountStateModule } from '@app/shared/state/account/account.module';
import { CompanyStateModule } from '../company/state/company-state.module';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionModalComponent } from './position-modal/position-modal.component';
import { PositionRoutingModule } from './position-routing.module';
import { PositionStateModule } from './state/position-state.module';

@NgModule({
  declarations: [PositionListComponent, PositionModalComponent],
  imports: [
    BasicModule,
    PositionRoutingModule,
    PrimeNgModule,
    TablaGenericaModule,
    BaseFormModule,
    TablaGenericaModule,
    LanguagesModule,
    PositionStateModule,
    AccountStateModule,
    GenericTableModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CompanyStateModule,
    PipesModule,
  ],
})
export class PositionModule {}
