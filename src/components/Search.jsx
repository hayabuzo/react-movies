import React from 'react';

class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'all',
      last: 'Best',
      page: 1,
    }
  }

  handleKey = (event) => {
    if(event.key==='Enter') { 
      this.setState(() => ({ last: this.state.search }));
      this.setState(() => ({ page: 1 }));
      this.props.sfunc(this.state.search, this.state.type, this.state.page);
    }
    console.log(window.innerWidth);
  }

  sClick = () => {
    this.setState(() => ({ last: this.state.search }));
    this.props.sfunc(this.state.search, this.state.type, 1);
    this.setState(() => ({ page: 1 }));
    } 

  handleFilter = (event) => {
    this.setState(
      () => ({type: event.target.dataset.type}),
      () => (this.props.sfunc(this.state.last, this.state.type, 1))
    )
  }

  prevPage = () => {
    if (this.state.page>1) {
      this.props.sfunc(this.state.last, this.state.type, this.state.page-1);
      this.setState(() => ({ page: this.state.page-1 }));
    }
  }
  nextPage = () => {
    if (this.state.page<Math.ceil(this.props.res/10)) {
      this.props.sfunc(this.state.last, this.state.type, this.state.page+1);
      this.setState(() => ({ page: this.state.page+1 }));
    }
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
          onClick={this.sClick}>
            Search
        </button>
      </div>
      <div>
      <span className="results" ><b>«{this.state.last}»</b>: found {this.props.res} results</span>
      {window.innerWidth<1000?<br/>:""} 
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
        {window.innerWidth<650?<br/>:""} 
        <div className={window.innerWidth<650?"":"next"}>
          <a className="res" href="#!" onClick={this.prevPage}>prev</a>
          <span className="res">{this.state.page+"/"+Math.ceil(this.props.res/10)}</span>
          <a className="res" href="#!" onClick={this.nextPage}>next</a>
        </div>
      </div>
    </div>
  </div>
  }
}

export { Search };