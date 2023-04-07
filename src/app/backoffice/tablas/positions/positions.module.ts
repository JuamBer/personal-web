import { NgModule } from '@angular/core';
import { BaseFormModule } from '@app/shared/components/base-form/base-form.module';
import { TablaGenericaModule } from '@app/shared/components/tabla-generica/tabla-generica.module';
import { BasicModule } from '@app/shared/modules/basic.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PrimeNgModule } from '@app/shared/modules/primeng.module';
import { AccountStateModule } from '@app/shared/state/account/account.module';
import { CompaniesStateModule } from '../companies/state/company-state.module';
import { PositionModalComponent } from './position-modal/position-modal.component';
import { PositionComponent } from './position/position.component';
import { PositionsRoutingModule } from './positions-routing.module';
import { PositionStateModule } from './state/position-state.module';

@NgModule({
  declarations: [PositionComponent, PositionModalComponent],
  imports: [
    BasicModule,
    PositionsRoutingModule,
    PrimeNgModule,
    TablaGenericaModule,
    BaseFormModule,
    TablaGenericaModule,
    LanguagesModule,
    PositionStateModule,
    AccountStateModule,
    CompaniesStateModule,
  ],
})
export class PositionsModule {}
