import { Injectable } from '@angular/core';
import { supabaseClient } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Curriculum } from '../models/curriculum.model';
import { curriculumNames } from '../state/curriculum.names';
@Injectable({
  providedIn: 'root',
})
export class CurriculumService extends CommonService<Curriculum> {
  constructor() {
    super(
      supabaseClient,
      curriculumNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, "language": "languages" ( * )',
      '*, "language": "languages" ( * )',
    );
  }
}
