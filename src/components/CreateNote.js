import React from 'react';
import PropTypes from 'prop-types';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.createNote(this.state);
  }

  render() {
    return (
      <section className='create-note'>
        <form onSubmit={this.onSubmitHandler}>
          <input 
            className='input-title'
            type='text' 
            placeholder='Enter note title ...' 
            value={this.state.title} 
            onChange={this.onTitleChangeHandler} 
            required 
          />
          <textarea 
            className='input-body'
            type='text' 
            placeholder='Enter your note here ...' 
            value={this.state.body} 
            onChange={this.onBodyChangeHandler} 
            required 
          />
          <button className='create-note__button' type='submit'>Create</button>
        </form>
      </section>
    );
  }
}

CreateNote.propTypes = {
  createNote: PropTypes.func.isRequired,
}

export default CreateNote;