/* eslint-disable @typescript-eslint/no-unused-vars */

import { Note } from "../models/note";
const initialState: Note[] = [];

export const noteReducer = (initialState, action) => {
  switch (action.type) {
    case "add":
      return [...initialState, action.payload];
    case "update":
      return initialState.map((note) => {
        if (note.id === action.payload) {
          return { ...note, status: false };
        }
        return note;
      });
    case "delete":
      return initialState.filter((note) => note.id !== action.payload);
    default:
      return initialState;
  }
};
