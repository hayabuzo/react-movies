import {Movies} from '../components/Movies';
import {Search} from '../components/Search';

export function Main(props) {
  return <main className="container content">
    <Search sfunc={props.sfunc}/>
    { props.loading
    ? 
    <div className="progress pink lighten-5">
      <div className="indeterminate pink lighten-1"></div>
    </div>
    :
    <Movies list={props.list}/> 
    }
  </main>
}