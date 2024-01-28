import { Resource } from './resource.model';

export class AuditFields extends Resource {
  createdAt: Date;
  updatedAt: Date | undefined;

  constructor(id: string, createdAt: Date | string, updatedAt: Date | string | undefined) {
    super(id);
    this.createdAt = new Date(createdAt);
    this.updatedAt = updatedAt ? new Date(updatedAt) : undefined;
  }
}
