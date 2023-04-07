import { Injectable } from '@angular/core';
import { Language } from '@app/backoffice/tablas/languages/models/language.model';
import { environment } from '@env/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey);
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
    return await this.supabase.storage
      .from('curriculums')
      .upload(this.generateCurriculumName(language), curriculum);
  }

  async downloadCurriculumFile(path: string) {
    return await this.supabase.storage.from('curriculums').download(path);
  }
}
