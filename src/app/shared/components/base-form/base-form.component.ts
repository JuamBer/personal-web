import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseFormConfig } from '@app/shared/models/form-config/base-form-config';
import { Subscription } from 'rxjs';
import { BaseFormContainer } from '../../models/form-config/base-form-container';
import { BaseFormFieldConfig } from '../../models/form-config/base-form-field-config';
import { FieldType } from './base-form-container/base-form-container.component';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnInit, AfterViewInit {
  @Input('config') config: BaseFormConfig;
  @Input('form') form: FormGroup;
  @Output('formChange') formChange: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();
  @Input('errors') errors: string[] = [];

  @Output() onButtonClick = new EventEmitter<any>();

  @Input() templates: any[];

  private subscriptions: Subscription[] = [];

  types = FieldType;
  constructor() {}
  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.form.valueChanges.subscribe((f) => {
        this.formChange.emit(this.form);
      }),
    );
  }

  ngOnInit(): void {
    if (this.config) {
      this.config.containers.forEach((container) => {
        this.addControl(container);
      });
    }
    this.formChange.emit(this.form);
  }

  private addControl(container: BaseFormContainer) {
    if (container.content.length) {
      container.content.forEach((field) => {
        if (this.isField(field)) {
          let f: BaseFormFieldConfig = field as BaseFormFieldConfig;
          this.form.addControl(
            f.formControlName,
            new FormControl(f.value, f.validators),
          );
        } else {
          let f: BaseFormContainer = field as BaseFormContainer;
          this.addControl(f);
        }
      });
    }
  }

  isField(content: BaseFormFieldConfig | BaseFormContainer): boolean {
    return !('title' in content);
  }

  buttonEvent(event: any) {
    if (this.onButtonClick) this.onButtonClick.emit(event);
  }
}
