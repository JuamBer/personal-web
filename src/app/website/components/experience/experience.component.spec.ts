import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonModule } from 'primeng/skeleton';
import { CertificateGroupEffect } from 'src/app/backoffice/tables/certificate-group/state/certificate-group.effects';
import { generateOneMockCompany } from 'src/app/backoffice/tables/company/models/company.mock';
import { LanguageStateModule } from 'src/app/backoffice/tables/language/state/language-state.module';
import { PositionStateModule } from 'src/app/backoffice/tables/position/state/position-state.module';
import { SkillTypeStateModule } from 'src/app/backoffice/tables/skill-type/state/skill-type-state.module';
import { SkillStateModule } from 'src/app/backoffice/tables/skill/state/skill-state.module';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { ActionStatus } from 'src/app/shared/state/common/common-state';
import { PublicLanguageEffect } from 'src/app/shared/state/languages/public-language.effects';
import { TranslatePipeStub } from 'src/app/shared/tests/stubs';
import { ExperienceComponent, PositionGroupedByCompany } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent, TranslatePipeStub],
      imports: [
        CommonModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        SkillTypeStateModule,
        SkillStateModule,
        PositionStateModule,
        LanguagesModule,
        LanguageStateModule,
        SkeletonModule,
        DirectivesModule,
        FontAwesomeModule,
        PipesModule,
        BrowserAnimationsModule,
      ],
      providers: [CertificateGroupEffect, PublicLanguageEffect],
    })
      .overrideComponent(ExperienceComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display company information when ActionStatus is SUCCESS', () => {
    const company = generateOneMockCompany();
    const time = '2020 - Present';
    const positionsGrouped: PositionGroupedByCompany[] = [
      {
        company: company,
        time: time,
        positions: [],
      },
    ];

    spyOn(component, 'positionsActionStatus').and.returnValue(ActionStatus.SUCCESS);
    spyOn(component, 'positionsGrouped').and.returnValue(positionsGrouped);

    fixture.detectChanges();

    const companyNameElement = fixture.debugElement.query(By.css('.organization h3 a'));
    expect(companyNameElement).toBeTruthy();
    expect(companyNameElement.nativeElement.textContent).toEqual(company.name);
    expect(companyNameElement.nativeElement.href).toContain(company.url);

    const companyTimeElement = fixture.debugElement.query(By.css('.organization span'));
    expect(companyTimeElement).toBeTruthy();
    expect(companyTimeElement.nativeElement.textContent).toContain(time);
  });

  it('should display skeletons when ActionStatus is PENDING', () => {
    spyOn(component, 'positionsActionStatus').and.returnValue(ActionStatus.PENDING);

    fixture.detectChanges();

    const skeletonElement = fixture.debugElement.query(By.css('.experience p-skeleton'));
    expect(skeletonElement).toBeTruthy();
  });
});
