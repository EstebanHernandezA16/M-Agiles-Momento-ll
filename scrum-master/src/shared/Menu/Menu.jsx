import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
    

  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor: '#54d7e3'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Barberia Columbia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link txtMenu">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tienda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">...</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">  
              <li className="nav-item ">
                <Link className="nav-link txtMenu" to="/">
                  Login
                </Link>
              </li>
            </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export { Menu };
