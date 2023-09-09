import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./core/app/App";
import "../src/index.scss";
import { NotesProvider } from "./notes/context/notes.context.provider";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
);
