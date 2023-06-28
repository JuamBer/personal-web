import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryInTimeChartComponent } from './salary-in-time-chart.component';

describe('SalaryInTimeChartComponent', () => {
  let component: SalaryInTimeChartComponent;
  let fixture: ComponentFixture<SalaryInTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaryInTimeChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalaryInTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
