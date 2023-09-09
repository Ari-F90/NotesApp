/* eslint-disable @typescript-eslint/no-unused-vars */

import { Note } from "../models/note";

export const initialState: Note[] = [
  {
    id: new Date().getMilliseconds(),
    title: "Travel to Singapur",
    category: "Travelling",
    status: false,
  },
  {
    id: new Date().getTime(),
    title: "Buy a new desktop",
    category: "Shopping",
    status: true,
  },
];

export const noteReducer = (initialState: Note[], action) => {
  switch (action.type) {
    case "add":
      return [...initialState, action.payload];
    case "update":
      return initialState.map((note) => {
        if (note.id === action.payload) {
          return { ...note, status: !note.status };
        }
        return note;
      });
    case "delete":
      return initialState.filter((note) => note.id !== action.payload);
    default:
      return initialState;
  }
};
