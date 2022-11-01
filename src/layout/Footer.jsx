export function Footer () {
  return  <footer className="page-footer purple darken-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Sergey Egorov
      <a className="grey-text text-lighten-4 right" href="https://github.com/hayabuzo/react-movies" target="_blank">Repo</a>
      </div>
    </div>
  </footer>
}