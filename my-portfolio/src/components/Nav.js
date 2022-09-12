import "bulma/css/bulma.min.css";

const Navigation = (props) => {
    return (
      <nav
      className="navbar is-success is-spaced"
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
        <a className="navbar-item" href="/Projects">
          Projects
        </a>
        <a className="navbar-item" href="/resume">
          Resume
        </a>
        <a className="navbar-item" href="/contact">
          Contact Me
        </a>
      </div>
    </nav>
    )
  }
  
  export default Navigation