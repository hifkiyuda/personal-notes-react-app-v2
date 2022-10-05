import React from 'react';
import { useNavigate } from 'react-router-dom';
import { unarchiveNote } from '../utils/local-data';
import PropTypes from 'prop-types';
import { RiInboxUnarchiveFill } from "react-icons/ri";

function RestoreButton({ id }) {
  const navigate = useNavigate();

  function onRestoreNote(id) {
    unarchiveNote(id);
    navigate('/archived-notes');
  }

  return (
    <RiInboxUnarchiveFill className='note-detail__restore icon' onClick={() => onRestoreNote(id)} />
  );
}

RestoreButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default RestoreButton;