import React from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="home-page">
        <h1>Active Notes</h1>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {this.state.notes.length === 0 ? (
          <p className="conditional-rendering">Notes is empty...</p>
        ) : (
          <NoteList notes={notes} />
        )}
      </section>
    );
  }
}

HomePageWrapper.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
}

export default HomePageWrapper;