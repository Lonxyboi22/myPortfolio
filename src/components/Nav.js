import "bulma/css/bulma.min.css";

const Navigation = (props) => {
    return (
      <nav
      className="navbar is-info is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Home
        </a>
      </div>

      <div className="navbar-menu has-dropdown is-active">
        <a className="navbar-item" href="/about">
          About
        </a>
        <a className="navbar-item" href="/projects">
          Projects
        </a>
        <a className="navbar-item" href="/resume">
          Resume
        </a>
      </div>
    </nav>
    )
  }
  
  export default Navigation