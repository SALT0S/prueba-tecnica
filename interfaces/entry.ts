export interface Entry {
  _id: string;
  title: string;
  createdAt: number;
  status: EntryStatus; // "active" | "inactive"
}

export type EntryStatus = "active" | "inactive";
