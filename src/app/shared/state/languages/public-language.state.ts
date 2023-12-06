import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { CommonState } from 'src/app/shared/state/common/common-state';

export class PublicLanguageState extends CommonState<Language> {
  constructor() {
    super();
  }
}
