import { Link } from 'react-router-dom'

function Header(props) {
    const navStyle = {
        display: 'flex',
        justifyContent: "space-around",
        padding: "8px",
        width: "90%",
        margin: "10px auto",
        fontFamily:'"Source Code Pro", monospace'

    }
    return (
        <header>
          <nav style={navStyle}>
            <Link to="/">
              <div>HOME</div>
            </Link>
            <Link to="/about">
              <div>ABOUT</div>
            </Link>
            <Link to="/projects">
              <div>PROJECTS</div>
            </Link>
          </nav>
        </header>
      );
  }
  
  export default Header;