import React from 'react';

import {Header} from './layout/Header'
import {Main}   from './layout/Main'
import {Footer} from './layout/Footer'

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movList: [],
      loading: true,
    }
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=best`)
    .then(response => response.json())
    .then(data => this.setState({movList: data.Search, loading: false}))
  }

  doSearch = (str, type = 'all') => {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type==='all' ? '' : `&type=${type}` }`)
    .then(response => response.json())
    .then(data => this.setState({movList: data.Search, loading: false}))
  }
  
  render() {
    return (
      <>
        <Header/>
        <Main 
          list={this.state.movList}
          sfunc={this.doSearch}
          loading={this.state.loading}
        />
        <Footer/>
      </>
    );}

}

export default App;
