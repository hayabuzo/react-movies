import {Card} from './Card'

export function Movies(props) {
  const { list = [] } = props;
  return <div className="movies">
    { list.length 
      ? 
      list.map( (film) => (<Card key={film.imdbID} film={film}/>) ) 
      :
      <h4>Nothing found</h4>
    }
  </div>;
}