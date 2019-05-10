import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: 'I am Groot.'
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    await this.setState({ searchQuery: e.currentTarget[0].value });
    let url = `https://city-explorer-backend.herokuapp.com/location?data=${
      this.state.searchQuery
    }`;
    let loc = await superagent.get(url);
    this.props.sendLoc(loc.body);
  };
  is;

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='search'
            id='input-search'
            placeholder='Enter a location here'
          />
          <button type='submit'>Explore!</button>
        </form>
        <h2>{this.state.searchQuery}</h2>
      </>
    );
  }
}

export default SearchForm;
