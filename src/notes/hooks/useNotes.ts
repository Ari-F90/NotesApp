/* eslint-disable @typescript-eslint/no-unused-vars */
import { useReducer } from "react";
import { Note } from "../models/note";
import { noteReducer } from "../reducer/notes.reducer";

const initialState: Note[] = [];

export const useNotes = () => {
  const [notes, dispatch] = useReducer(noteReducer, initialState);

  const notesTotal: number = notes.length;
  const notesPending: number = notes.filter(
    (note) => note.status === false
  ).length;

  const handleAdd = (note): void => {
    const action = {
      type: "add",
      payload: note,
    };
    dispatch(action);
  };

  const handleUpdate = (id): void => {
    const action = {
      type: "update",
      payload: id,
    };
    dispatch(action);
  };

  const handleDelete = (id): void => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  return { notes, notesTotal, handleAdd, handleUpdate, handleDelete };
};
