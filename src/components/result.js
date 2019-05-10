import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        'I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. '
    };
  }
  // use these to call the route and get data from backend
  // componentDidMount(){};
  // componentDidUpdate(){};
  render() {
    return <section>{this.state.content}</section>;
  }
}

export default Result;
