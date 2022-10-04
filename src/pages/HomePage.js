import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };
  }

  render() {
    return (
      <section className='home-page'>
        <h1>Active Notes</h1>
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default HomePage;