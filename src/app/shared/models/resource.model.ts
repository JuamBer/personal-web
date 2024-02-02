/* eslint-disable @typescript-eslint/no-unused-vars */

export class Resource {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  getDisplayName(acronym: string): string {
    return this.id;
  }
}
