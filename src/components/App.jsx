import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import NewNote from "./NewNote.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <NewNote addNote={handleAddNote} />
      {notes.map((value, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={value.title}
            content={value.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
