import React, { useState } from "react";

function CreateArea(props) {
  // Initialize state for title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Handle changes in input fields (title and content)
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote, 
        [name]: value
      };
    });
  }
 

  // Submit the note when the "Add" button is clicked
  function submitNote(event) {
    props.onAdd(note); 
    setNote({
      title: "",
      content: ""
    })
    
    // Call the function passed via props and pass the current note
    event.preventDefault(); // Prevent the default form submission behavior
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
