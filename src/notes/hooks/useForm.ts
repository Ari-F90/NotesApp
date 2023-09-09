import { useContext, useState } from "react";
import { NotesContext } from "../context/notes.context";

export const useForm = () => {
  const [form, setForm] = useState({ title: "", category: "", status: false });
  const { title, category } = form;

  const { handleAdd } = useContext(NotesContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm({ title: "", category: "", status: false });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newNote = {
      id: new Date().getMilliseconds(),
      title,
      category,
      status: false,
    };
    handleAdd(newNote);
    handleReset();
  };
  return {
    ...form,
    handleChange,
    handleReset,
    handleSubmit,
  };
};
