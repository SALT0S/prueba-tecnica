import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];

  addNewEntry: (title: string) => void;
  updateEntry: (entry: Entry) => void;
  deleteEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext<ContextProps>({} as ContextProps);
