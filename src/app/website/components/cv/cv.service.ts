import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { supabaseClient } from 'src/app/shared/services/auth.service';
import { snakeCaseToCamelCase } from 'src/app/shared/utils/supabase-utils';

@Injectable({
  providedIn: 'root',
})
export class CVService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = supabaseClient;
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
