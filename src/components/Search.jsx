import React from 'react';

class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'all'
    }
  }

  handleKey = (event) => {
    if(event.key==='Enter') this.props.sfunc(this.state.search, this.state.type);
  }

  handleFilter = (event) => {
    this.setState(
      () => ({type: event.target.dataset.type}),
      () => (this.props.sfunc(this.state.search, this.state.type))
    )
  }

  render () {


    return <div className="row">
    <div className="col s12">
      <div className="input-field">
        <input 
          placeholder="enter movie name" 
          type="search" 
          className="validate"
          value={this.state.search}
          onChange={(event) => this.setState({search: event.target.value}) }
          onKeyDown={this.handleKey}
        />
        <button 
          className="btn pink lighten-2 search-btn" 
          onClick={ () => this.props.sfunc(this.state.search, this.state.type)}>
            Search
        </button>
      </div>
      <div>
        <label>
          <input 
            name="group1" 
            className="with-gap" 
            type="radio" 
            onChange={this.handleFilter} 
            data-type="all" 
            checked={this.state.type === 'all'}
            />
          <span>All</span>
        </label>
        <label>
          <input 
            name="group1" 
            className="with-gap" 
            type="radio" 
            onChange={this.handleFilter} 
            data-type="movie"  
            checked={this.state.type === 'movie'}
            />
          <span>Movies only</span>
        </label>
        <label>
          <input 
            name="group1" 
            className="with-gap" 
            type="radio" 
            onChange={this.handleFilter} 
            data-type="series"  
            checked={this.state.type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  </div>
  }
}

export { Search };