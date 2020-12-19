import React, { useState } from "react";
import Note from "./Note";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Zoom from "@material-ui/core/Zoom";

function NewNote(props) {
  const [expanded, setExpanded] = useState(false);
  const [newInput, setNewInput] = useState({
    title: "",
    content: "",
  });

  function handleNoteInput(event) {
    const { name, value } = event.target;
    setNewInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleOnClick(event) {
    props.addNote(newInput);
    setNewInput({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleZoomIn() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            onChange={handleNoteInput}
            name="title"
            placeholder="title"
            value={newInput.title}
          ></input>
        )}
        <textarea
          onChange={handleNoteInput}
          name="content"
          placeholder="take a note..."
          value={newInput.content}
          rows={expanded ? "3" : "1"}
          onClick={handleZoomIn}
        ></textarea>
        <Zoom in={expanded}>
          <Fab onClick={handleOnClick}>
            <EditIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NewNote;
