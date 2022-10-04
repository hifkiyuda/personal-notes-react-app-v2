import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../utils/local-data';

function DeleteButton({ id, isArchived }) {
  const navigate = useNavigate();

  function onDeleteNote(id) {
    deleteNote(id);
    
    if (isArchived) {
      navigate('/archived-notes');
    } else {
      navigate('/');
    }
  }

  return (
    <button className='note-detail__delete button' onClick={() => onDeleteNote(id)}>Delete</button>
  );
}

export default DeleteButton;