import React from 'react';
import Header from './header.js';
import Map from './map.js';
import SearchForm from './search-form.js';
import SearchResults from './search-results.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: 'placeholder',
      locationData: {}
    };
  }

  updateLocationData = newLoc => {
    this.setState({ locationData: newLoc });
  };

  render() {
    return (
      <>
        <Header />
        <SearchForm sendLoc={this.updateLocationData} />
        <Map loc={this.state.locationData} />
        <SearchResults />
      </>
    );
  }
}

export default App;
