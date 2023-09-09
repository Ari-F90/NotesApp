import { NotesContext } from "./notes.context";
import { useNotes } from "../hooks/useNotes";
import React from "react";

export const NotesProvider = ({ children }: { children: JSX.Element }) => {
  const context = useNotes();

  return (
    <NotesContext.Provider value={context}>{children}</NotesContext.Provider>
  );
};
