import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsInTimeChartComponent } from './positions-in-time-chart.component';

describe('TimeInCompaniesChartComponent', () => {
  let component: PositionsInTimeChartComponent;
  let fixture: ComponentFixture<PositionsInTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionsInTimeChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PositionsInTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
