import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

function NoteDetailContent({ title, body, createdAt }) {
  return (
    <div className='note-detail__content'>
      <h1 className='note-detail__title'>{title}</h1>
      <p className='note-detail__created'>{showFormattedDate(createdAt)}</p>
      <p className='note-detail__body'>{body}</p>
    </div>
  );
}

NoteDetailContent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteDetailContent;