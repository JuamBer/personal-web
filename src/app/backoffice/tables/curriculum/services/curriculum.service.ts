import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
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
