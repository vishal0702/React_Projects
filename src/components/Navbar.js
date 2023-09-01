import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="#">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.aboutText}
              </Link>
              {/* <a className="nav-link active" href="/about">
                {props.aboutText}
              </a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`} >
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" style={{cursor: 'pointer'}} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Dark":"Light"} Mode</label>
            {/* {props.mode.charAt(0).toUpperCase()+props.mode.slice(1)} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  // isRequired is used to show the warning if the prop isn't provided
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title : "Set Title Here",
  aboutText : "Set About"
}