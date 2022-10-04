import React from 'react';
import CreateNote from '../components/CreateNote';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function CreatePage() {
  const navigate = useNavigate();

  function onCreateNoteHandler(notes) {
    addNote(notes);
    navigate('/');
  }

  return (
    <section className='create-page'>
      <h1>Create Note</h1>
      <CreateNote createNote={onCreateNoteHandler} />
    </section>
  );
}

export default CreatePage;