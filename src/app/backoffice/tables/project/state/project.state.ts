import { CommonState } from 'src/app/shared/state/common/common-state';
import { Project } from '../models/project.model';

export class ProjectState extends CommonState<Project> {
  constructor() {
    super();
  }
}
