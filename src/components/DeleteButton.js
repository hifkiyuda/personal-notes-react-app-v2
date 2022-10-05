import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../utils/local-data';
import PropTypes from 'prop-types';

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

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
}

export default DeleteButton;