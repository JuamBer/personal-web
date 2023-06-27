import { Injectable, inject } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { camelCaseToSnakeCase, flatObjectsById } from 'src/app/shared/utils/supabase-utils';
import { TextContentService } from '../../text-content/services/text-content.service';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeNames } from '../state/certificate-type.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateTypeService extends CommonService<CertificateType> {
  private textContentService = inject(TextContentService);

  constructor() {
    super(
      supabaseClient,
      certificateTypeNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      'id, name, description',
      '*, "certificates": "certificates" ( * )',
    );
  }

  override async update(payload: CertificateType) {
    await this.textContentService.upsert(payload.nameTextContent);
    const { data, error } = await this.supabase
      .from(this.table)
      .update(flatObjectsById(camelCaseToSnakeCase(payload)))
      .match({ id: payload.id });

    return error ? error : data;
  }
}
