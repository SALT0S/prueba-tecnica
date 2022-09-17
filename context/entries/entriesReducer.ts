import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType =
  | { type: "[Entry] Add-Entry"; payload: Entry }
  | { type: "[Entry] Check-Entry"; payload: Entry }
  | { type: "[Entry] Refresh-Data"; payload: Entry[] }
  | { type: "[Entry] Delete-Entry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "[Entry] Check-Entry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.title = action.payload.title;
          }
          return entry;
        }),
      };

    case "[Entry] Delete-Entry":
      return {
        ...state,
        entries: state.entries.filter(
          (entry) => entry._id !== action.payload._id
        ),
      };

    case "[Entry] Refresh-Data":
      return {
        ...state,
        entries: [...action.payload],
      };

    default:
      return state;
  }
};
