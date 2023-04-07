import { Injectable } from '@angular/core';
import { Language } from '@app/backoffice/tablas/languages/models/language.model';
import { snakeCaseToCamelCase } from '@app/shared/utils/SupabaseUtils';
import { environment } from '@env/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class CVService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey);
  }

  async getCV(language: Language) {
    let { data, error } = await this.supabase
      .from('curriculums')
      .select('*, "language": languages ( * )')
      .eq('language_id', language.id)
      .order('date', { ascending: false })
      .limit(1)

      .single();

    // if (!error) {
    //   const res: Curriculum = snakeCaseToCamelCase(data);
    //   const { data: dataF, error: errorF } = await this.supabase.storage
    //     .from('curriculums')
    //     .download(res.pdf);
    // }
    return error ? error : snakeCaseToCamelCase(data);
  }
}
