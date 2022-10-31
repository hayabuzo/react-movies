export function Footer () {
  return  <footer className="page-footer purple darken-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Sergey Egorov
      <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
      </div>
    </div>
  </footer>
}