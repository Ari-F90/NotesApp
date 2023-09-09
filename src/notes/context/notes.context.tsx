import { createContext } from "react";

import { UseNotesStructure } from "../hooks/useNotes";

export const NotesContext = createContext({} as UseNotesStructure);
