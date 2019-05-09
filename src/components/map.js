import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        'https://maps.googleapis.com/maps/api/staticmap?center=47.606210%2c%20-122.332071&zoom=13&size=600x300&maptype=roadmap%20%20&key=AIzaSyBfOxvSAEhF0bINfqhSTthhNKEBb8eHfHc'
    };
  }
  render() {
    return (
      <>
        <img src={this.state.url} alt='' title='' />
      </>
    );
  }
}

export default Map;
