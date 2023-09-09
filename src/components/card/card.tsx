import React, { useContext } from "react";
import { NotesContext } from "../../notes/context/notes.context";

export const Card = ({ item }) => {
  const { handleUpdate, handleDelete } = useContext(NotesContext);
  return (
    <>
      <div onClick={(): void => handleUpdate(item.id)}>
        <li>{item.title}</li>
        <li>{item.category}</li>
        {item.status ? (
          <img alt="done" src="../../../img/ok.png" />
        ) : (
          <img alt="not done" src="../../../img/nok.png" />
        )}
        <img
          alt="delete"
          src="../../../img/delete.png"
          onClick={() => handleDelete(item.id)}
        ></img>
      </div>
    </>
  );
};
