import React from 'react';
import App from './App.jsx';

// looks like I need to make this a class?
// make this a class
// binding only needs to happen w/ a class
// otherwise you call it w/props?
// make sure to adjust the html format
// i might need to adjust the structure of the html
// export and import ?
// set the state to empty
// follow the structure of grocery
class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      item: '',
    }
    this.inititalState = {
      item: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit(event) {
  event.preventDefault();

    console.log(props)

  // props.reinititalizeState(this.state, this.inititalState)
}

handleChange(event) {
  console.log(event.target.item);
  this.setState({
    [event.target.item]: event.target.value
  })
  console.log(this.state);

};

  render() {
    return(
      <div className="search-bar">
        <input className="form-control" name="item" type="text" value={this.state.item.value} onChange={this.handleChange} value={this.state.item}/>
        <button className="btn-search" onClick={this.handleSubmit}>
        GO!
        </button>
      </div>
    )
  }
};

export default Search;