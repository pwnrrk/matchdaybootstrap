import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-dark navbar-dark">
        <button className="navbar-toggler" data-target="#navbar-col">
          <svg
            data-v-3fe0c21f=""
            className="svg-inline--fa fa-bars fa-w-14"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div className="navbar-collapse" id="navbar-col">
          <ul>
            <li>
              <Link to="/" className="navbar-link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/document" className="navbar-link">
                Document
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
