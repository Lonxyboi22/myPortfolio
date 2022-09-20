import "bulma/css/bulma.min.css";


const Header = (props) => {
    return (
      <div className="w-100 mt-auto p-4">
        <header className="container text-center mb-5">
          <h1>{ props.name }</h1>
        </header>
      </div>
    )
  }
  
  export default Header