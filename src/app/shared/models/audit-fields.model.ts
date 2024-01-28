import { Resource } from './resource.model';

export class AuditFields extends Resource {
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, createdAt: Date | string, updatedAt: Date | string) {
    super(id);
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
  }
}
