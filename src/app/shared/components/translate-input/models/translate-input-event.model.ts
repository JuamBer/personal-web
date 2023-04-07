import { TextContent } from './text-content.model';

export interface TranslateInputEvent {
  actualTranslation: string;
  translateInput: TextContent;
  valid: boolean;
}
