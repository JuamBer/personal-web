import { CommonState } from 'src/app/shared/state/common/common-state';
import { Language } from '../models/language.model';

export class LanguageState extends CommonState<Language> {
  constructor() {
    super();
  }
}
