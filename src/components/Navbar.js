// this is raect functional component just write rfc to get this
import React from 'react'
// this is importing of proptyps juyst write impt
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid"> 
      <Link className="navbar-brand" to = "/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* remove active class from home so that it wont remain highlighted */}
            <Link className="nav-link " aria-current="page" to = "/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/about">{props.about}</Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
         <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
    </div>
  </nav>
  </div>
  </>
  )
}

// the types of data values in app.js should be these else console will show error these could be string number boolean array object
Navbar.propTypes = {
  title : PropTypes.string,
  about : PropTypes.string
}

// if values are not passed of props  in App.js  this will appear
Navbar.defaultProps = {
  title : "set title",
  about : "About"
}