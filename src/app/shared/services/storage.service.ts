import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { supabaseClient } from './auth.service';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = supabaseClient;
  }

  private generateCurriculumName(language: Language) {
    return (
      'public/CV_JuanSaezGarcia_' +
      language.acronym.toUpperCase() +
      '_' +
      new Date().getMonth() +
      1 +
      '_' +
      new Date().getFullYear() +
      '_' +
      (Math.floor(Math.random() * (1000 - 1 + 1)) + 1) +
      '.pdf'
    );
  }
  async uploadCurriculumFile(language: Language, curriculum: File) {
    return await this.supabase.storage.from('curriculums').upload(this.generateCurriculumName(language), curriculum);
  }

  async downloadCurriculumFile(path: string) {
    return await this.supabase.storage.from('curriculums').download(path);
  }
}
