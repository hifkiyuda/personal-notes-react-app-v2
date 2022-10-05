import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../utils/local-data';
import PropTypes from 'prop-types';
import { RiDeleteBinFill } from 'react-icons/ri';

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
    <RiDeleteBinFill className='note-detail__delete icon' onClick={() => onDeleteNote(id)} />
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
}

export default DeleteButton;