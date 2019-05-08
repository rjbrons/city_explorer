import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>City Explorer</h1>
        <p>
          Enter a location below to learn about the weather, events,
          restaurants, movies filmed there, and more!
        </p>
      </React.Fragment>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result url='' />
        <Result url='' />
        <Result url='' />
        <Result url='' />
        <Result url='' />
      </React.Fragment>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input
          type='text'
          name='search'
          id='input-search'
          placeholder='Enter a location here'
        />
        <button type='submit'>Explore!</button>
      </React.Fragment>
    );
  }
}

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
      <React.Fragment>
        <img src={this.state.url} alt='' title='' />
      </React.Fragment>
    );
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        'Kyp ugnaught quence hallotan kobok dengar logray joelle wyl. Iktotchi cody sern dodonna disra bespin. Kasan solo darth yarael vor jettster plagueis moff. San quadrinaros tusken raider tchuukthai echani neti keshiri gallia tatooine. Zev polis zeltron ackbar jabba vebb yarael wookiee hallotan. Yoda olié zam teek r2-d2 zannah jin ha sullustan. alleen theelin cathar vella vodran rancisis khai aayla. Gev ssi-ruuk naberrie roos ulic cb-99 haruun. Mandalore disra var solo lama mygeeto. Boz lowbacca vilim droch cordé saurin darth nosaurian.'
    };
  }
  render() {
    return <section>{this.state.content}</section>;
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
