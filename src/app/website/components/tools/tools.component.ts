import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
} from '@angular/core';
import { Skill } from 'src/app/backoffice/tables/skill/models/skill.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toolsEnterAnimation', [
      state('inViewport', style({ width: '100%' })),
      state('notInViewport', style({ width: '0%' })),
      transition('notInViewport <=> inViewport', animate('750ms ease-out')),
    ]),
  ],
})
export class ToolsComponent extends TranslationProvider implements AfterViewInit {
  private ref = inject(ChangeDetectorRef);

  @ViewChild('tools') toolsElement!: ElementRef<HTMLDivElement>;
  toolsElementState: 'inViewport' | 'notInViewport' = 'notInViewport';

  @Input({
    required: true,
  })
  entities: Skill[] = [];

  @Input()
  loading: boolean = false;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.toolsElementState = entry.isIntersecting ? 'inViewport' : 'notInViewport';
        if (this.toolsElementState === 'inViewport') {
          this.ref.detectChanges();
          observer.disconnect();
        }
      });
    });
    observer.observe(this.toolsElement.nativeElement);
  }
}
