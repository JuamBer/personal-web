import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { BaseFormFieldConfig } from '@app/shared/models/form-config/base-form-field-config';
import { BaseFormContainer } from '../../../models/form-config/base-form-container';

export enum FieldType {
  TEXT = 'text',
  DATE = 'date',
  DATETIME = 'datetime',
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  MONEY = 'money',
  EMAIL = 'email',
  PASSWORD = 'password',
  SELECT = 'select',
  SELECT_CUSTOM = 'select_custom',
  MULTISELECT = 'multiselect',
  MULTISELECT_CUSTOM = 'multiselect_custom',
  TABLE = 'table',
}

@Component({
  selector: 'base-form-container',
  templateUrl: './base-form-container.component.html',
  styleUrls: ['./base-form-container.component.scss'],
})
export class BaseFormContainerComponent implements OnInit {
  handleField(
    field: BaseFormContainer | BaseFormFieldConfig,
  ): BaseFormContainer {
    if (field as BaseFormContainer) {
      return field as BaseFormContainer;
    }
    return null;
  }
  @Input('container') container: BaseFormContainer;
  @Input('level') level: number = 0;
  @Input('errors') errors: string[] = [];
  @Input('formGroup') formGroup: FormGroup;

  @Input() templates: any[];

  types = FieldType;
  constructor() {}

  ngOnInit(): void {}

  isField(content: BaseFormFieldConfig | BaseFormContainer): boolean {
    return !('title' in content);
  }

  required(control: string) {
    if (control && this.formGroup.get(control).validator) {
      const validator = this.formGroup
        .get(control)
        .validator({} as AbstractControl);
      // if (validator && validator.required) return true;
    }
    return false;
  }
}
