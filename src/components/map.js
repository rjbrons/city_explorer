import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.mapURL} alt='' title='' />
      </>
    );
  }
}

export default Map;
