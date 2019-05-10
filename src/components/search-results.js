import React from 'react';
import Result from './result.js';

class SearchResults extends React.Component {
  render() {
    //send request to route for each route
    // let weatherData = superagent.get().set();
    // let eventData = superagent.get().set();
    // let yelpData = superagent.get().set();
    // let movieData = superagent.get().set();

    return (
      <>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </>
    );
  }
}

export default SearchResults;
