import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
// import { getAllNotes } from '../utils/local-data';

function NoteList({ notes }) {
  // const archived = getAllNotes();

  if (notes.length === 0) {
    return <p>Create some notes...</p>;
  }

  return (
    <div className='note-list'>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;