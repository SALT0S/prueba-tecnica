import React, { PropsWithChildren, useEffect, useReducer } from "react";
import { entriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

type Props = {
  children?: React.ReactNode;
};

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (title: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { title });
    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = async ({ _id, title, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        title,
        status,
      });
      dispatch({ type: "[Entry] Check-Entry", payload: data });
    } catch (error) {
      console.log({ error });
    }
  };

  const deleteEntry = async ({ _id }: Entry) => {
    try {
      const { data } = await entriesApi.delete<Entry>(`/entries/${_id}`);
      dispatch({ type: "[Entry] Delete-Entry", payload: data });
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{ ...state, addNewEntry, updateEntry, deleteEntry }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
