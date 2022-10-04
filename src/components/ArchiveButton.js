import React from 'react';
import { useNavigate } from 'react-router-dom';
import { archiveNote } from '../utils/local-data';

function ArchiveButton({ id }) {
  const navigate = useNavigate();

  function onArchiveNote(id) {
    archiveNote(id);
    navigate('/');
  }
  
  return (
    <button className='note-detail__archive button' onClick={() => onArchiveNote(id)}>Archive</button>
  );
}

export default ArchiveButton;