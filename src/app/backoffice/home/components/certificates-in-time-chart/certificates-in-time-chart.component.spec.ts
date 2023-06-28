import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesInTimeChartComponent } from './certificates-in-time-chart.component';

describe('CertificatesInTimeChartComponent', () => {
  let component: CertificatesInTimeChartComponent;
  let fixture: ComponentFixture<CertificatesInTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificatesInTimeChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificatesInTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
