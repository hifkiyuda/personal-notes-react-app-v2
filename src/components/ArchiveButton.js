import React from 'react';
import { useNavigate } from 'react-router-dom';
import { archiveNote } from '../utils/local-data';
import PropTypes from 'prop-types';
import { RiInboxArchiveFill } from "react-icons/ri";

function ArchiveButton({ id }) {
  const navigate = useNavigate();

  function onArchiveNote(id) {
    archiveNote(id);
    navigate('/');
  }
  
  return (
    <RiInboxArchiveFill className='note-detail__archive icon' onClick={() => onArchiveNote(id)} />
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ArchiveButton;