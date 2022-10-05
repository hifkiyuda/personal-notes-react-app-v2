import React from 'react';
import { useNavigate } from 'react-router-dom';
import { archiveNote } from '../utils/local-data';
import PropTypes from 'prop-types';

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

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ArchiveButton;