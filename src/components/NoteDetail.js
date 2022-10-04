import React from 'react';
import NoteDetailContent from './NoteDetailContent';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import RestoreButton from './RestoreButton';

function NoteDetail({ isArchived, title, body, createdAt, id }) {
  if (isArchived) {
    return (
      <section className='note-detail'>
        <NoteDetailContent title={title} body={body} createdAt={createdAt} />
        <div className='note-detail__buttons'>
          <DeleteButton id={id} isArchived={isArchived} />
          <RestoreButton id={id} />
        </div>
      </section>
    );
  } else {
    return (
      <section className='note-detail'>
        <NoteDetailContent title={title} body={body} createdAt={createdAt} />
        <div className='note-detail__buttons'>
          <DeleteButton id={id} isArchived={isArchived} />
          <ArchiveButton id={id} />
        </div>
      </section>
    );
  }
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteDetail;