import React from 'react';
import Search from './Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('tacos')
    const movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];
    this.initialState = {
      movies: movies,
    }
    // this.props.movies = movies;
    // change movies const to this.movies
    // or this.props.movies?
    // make a run script that does all the things you need it to.
    this.state = {
      movies: movies,
    };
  }

  reinitializeState(state, intitialState) {
    this.state = this.intitialState
  }


  render () {
    return (
      <div>
        <h1 className ="title">Movie List</h1>
        <Search />
        <ul className="movie-list">
          <li className="movie-list-entry">{this.state.movies[0].title}</li>
          <li className="movie-list-entry">{this.state.movies[1].title}</li>
          <li className="movie-list-entry">{this.state.movies[2].title}</li>
          <li className="movie-list-entry">{this.state.movies[3].title}</li>
          <li className="movie-list-entry">{this.state.movies[4].title}</li>
        </ul>
      </div>
    )
  }

};

export default App;