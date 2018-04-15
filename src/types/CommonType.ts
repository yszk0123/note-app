export type UUID = string;

export interface Entity<ID extends string, State> {
  ids: ID[];
  byId: Record<ID, State>;
}
