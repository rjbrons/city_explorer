import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <>
        <input
          type='text'
          name='search'
          id='input-search'
          placeholder='Enter a location here'
        />
        <button type='submit'>Explore!</button>
      </>
    );
  }
}

export default SearchForm;
