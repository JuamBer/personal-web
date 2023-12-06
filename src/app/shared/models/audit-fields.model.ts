import { Resource } from './resource.model';

export interface AuditFields extends Resource {
  createdAt: Date;
  updatedAt: Date;
}
