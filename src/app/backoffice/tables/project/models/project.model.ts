/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Company } from '../../company/models/company.model';

export interface ProjectUrls {
  web?: string;
  playStore?: string;
  appStore?: string;
  microsoftStore?: string;
  github?: string;
}

export class Project extends AuditFields {
  name: string;
  logo: string;
  descriptionTranslations: Translation[];
  date: Date;
  company?: Company;
  technologies: string[];
  urls: ProjectUrls;

  constructor(project: Project) {
    super(project.id, project.createdAt, project.updatedAt);
    this.name = project.name;
    this.logo = project.logo;
    this.descriptionTranslations = project.descriptionTranslations;
    this.date = new Date(project.date);
    this.company = project.company;
    this.technologies = (project.technologies ? project.technologies : []).sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase()),
    );
    this.urls = project.urls;
  }

  override getDisplayName(acronym: string): string {
    return this.name;
  }
}

export type ProjectFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  logo: FormControl<string | undefined>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
  date: FormControl<Date | undefined>;
  company: FormControl<Company | undefined>;
  technologies: FormControl<string[]>;
  urls: ProjectUrlsFormGroup;
}>;

export type ProjectUrlsFormGroup = FormGroup<{
  web: FormControl<string | undefined>;
  playStore: FormControl<string | undefined>;
  appStore: FormControl<string | undefined>;
  microsoftStore: FormControl<string | undefined>;
  github: FormControl<string | undefined>;
}>;
