import React from "react";
import { useForm } from "../../notes/hooks/useForm";

export const Form = () => {
  const { title, category, handleChange, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a note"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <select
          placeholder="Choose a category"
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option>Travelling</option>
          <option>Groceries</option>
          <option>Leisure</option>
          <option>Bills</option>
          <option>College</option>
          <option>Healthcare</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
