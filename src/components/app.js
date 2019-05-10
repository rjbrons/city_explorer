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
      locationData: {},
      mapURL:
        'https://maps.googleapis.com/maps/api/staticmap?center=47.606210%2c%20-122.332071&zoom=13&size=600x300&maptype=roadmap%20%20&key=AIzaSyBfOxvSAEhF0bINfqhSTthhNKEBb8eHfHc'
    };
  }

  updateMapData = loc => {
    this.setState({
      mapURL: `https://maps.googleapis.com/maps/api/staticmap?center=${
        loc.latitude
      }%2c%20${loc.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    });
  };

  updateLocationData = async newLoc => {
    await this.setState({ locationData: newLoc });
    this.updateMapData(newLoc);
  };

  render() {
    return (
      <>
        <Header />
        <SearchForm sendLoc={this.updateLocationData} />
        <Map mapURL={this.state.mapURL} />
        <SearchResults locData={this.state.locationData} />
      </>
    );
  }
}

export default App;
