/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={String(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === undefined) {
      return <PageNotFound />;
    } else {
      return (
        <section className='detail-page'>
          <NoteDetail 
            isArchived={this.state.note.archived} 
            {...this.state.note} 
          />
        </section>
      );
    }
  }
}

DetailPageWrapper.propTypes = {
  id: PropTypes.string,
}

export default DetailPageWrapper;