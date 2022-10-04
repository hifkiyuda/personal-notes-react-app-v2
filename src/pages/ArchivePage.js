import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/local-data';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    };
  }

  render() {
    return (
      <section className='archive-page'>
        <h1>Archived Notes</h1>
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default ArchivePage;