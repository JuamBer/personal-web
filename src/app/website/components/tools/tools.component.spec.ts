import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mockSkill } from 'src/app/backoffice/tables/skill/models/skill.mock';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { TestUtils } from 'src/app/shared/utils/test.utils';
import { ToolsComponent } from './tools.component';

const entities = TestUtils.generateManyMocks(mockSkill, 2);

@Component({
  template: `<app-tools [entities]="entities" [loading]="loading"></app-tools>`,
})
class TestHostComponent {
  @ViewChild(ToolsComponent)
  public toolsComponent!: ToolsComponent;
  entities = entities;
  loading = false;
}

describe('ToolsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsComponent, TestHostComponent],
      imports: [PipesModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.toolsComponent).toBeTruthy();
  });

  it('should initialize with correct state', () => {
    expect(component.toolsComponent.toolsElementState).toEqual('notInViewport');
  });

  it('should display entities', () => {
    const toolElements = fixture.debugElement.queryAll(By.css('.tool'));
    expect(toolElements.length).toBe(2);

    const nameElements = toolElements.map((tool) => tool.query(By.css('.name')));
    nameElements.forEach((nameElement) => {
      expect(entities.some((entity) => entity.name === nameElement.nativeElement.textContent.trim())).toBeTrue();
    });

    const progressElements = toolElements.map((tool) => tool.query(By.css('.progress-filled')));
    progressElements.forEach((progressElement) => {
      expect(
        entities.some((entity) => entity.percentage === parseInt(progressElement.nativeElement.style.width)),
      ).toBeTrue();
    });
  });
});
