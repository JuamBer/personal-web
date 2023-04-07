import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescargaComponent } from './descargas.component';

describe('DescargaComponent', () => {
  let component: DescargaComponent;
  let fixture: ComponentFixture<DescargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescargaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
