import React from 'react';
import { useNavigate } from 'react-router-dom';
import { unarchiveNote } from '../utils/local-data';

function RestoreButton({ id }) {
  const navigate = useNavigate();

  function onRestoreNote(id) {
    unarchiveNote(id);
    navigate('/archived-notes');
  }

  return (
    <button className='note-detail__restore button' onClick={() => onRestoreNote(id)}>Restore</button>
  );
}

export default RestoreButton;