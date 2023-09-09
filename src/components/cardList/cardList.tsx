import React, { useContext } from "react";
import { NotesContext } from "../../notes/context/notes.context";
import { Note } from "../../notes/models/note";
import { Card } from "../card/card";

export const CardList = () => {
  const { notes } = useContext(NotesContext);

  // useEffect(() => {
  //   notes;
  // }, [notes]);

  return (
    <ul>
      {notes.map((item: Note) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </ul>
  );
};
