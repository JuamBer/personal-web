import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonModule } from 'primeng/skeleton';
import { mockCertificateGroup } from 'src/app/backoffice/tables/certificate-group/models/certificate-group.mock';
import { CertificateGroupStateModule } from 'src/app/backoffice/tables/certificate-group/state/certificate-group-state.module';
import { mockCertificate } from 'src/app/backoffice/tables/certificate/models/certificate.mock';
import { PublicLanguageStateModule } from 'src/app/shared/state/languages/public-language-state.module';
import { englishLanguage } from 'src/app/shared/tests/stubs';
import { TestUtils } from 'src/app/shared/utils/test.utils';
import { SwiperModule } from 'swiper/angular';
import { CertificatesComponent } from './certificates.component';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  let fixture: ComponentFixture<CertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificatesComponent],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot(),
        CertificateGroupStateModule,
        PublicLanguageStateModule,
        SwiperModule,
        SkeletonModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
      ],
    })
      .overrideComponent(CertificatesComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with class "certificates"', () => {
    const certificatesDiv = fixture.debugElement.query(By.css('.certificates'));
    expect(certificatesDiv).toBeTruthy();
  });

  it('should render certificate group titles', () => {
    const certificateGroupsWithoutCertificates = TestUtils.generateManyMocks(mockCertificateGroup, 2);
    const certificateGroupsWithCertificates = certificateGroupsWithoutCertificates.map((certificateGroup) => ({
      ...certificateGroup,
      certificates: TestUtils.generateManyMocks(mockCertificate, 3),
    }));

    spyOn(component, 'language').and.returnValue(englishLanguage);
    spyOn(component, 'certificateGroups').and.returnValue(certificateGroupsWithCertificates);
    fixture.detectChanges();

    const titles = fixture.debugElement.queryAll(By.css('.certificate-group-title'));

    expect(titles.length).toBe(certificateGroupsWithCertificates.length);

    titles.forEach((title, index) => {
      expect(title.nativeElement.textContent).toBe(
        component.getTranslation('en', certificateGroupsWithCertificates[index].nameTranslations),
      );
    });
  });

  it('should return faGooglePlay', () => {
    expect(component.faGooglePlay).toBe(faGooglePlay);
  });

  it('should return faGithub', () => {
    expect(component.faGithub).toBe(faGithub);
  });

  it('should return faLink', () => {
    expect(component.faLink).toBe(faLink);
  });

  it('should return faDownload', () => {
    expect(component.faDownload).toBe(faDownload);
  });
});
