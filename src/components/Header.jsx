import React from "react";

function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          CP-Tracker
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" rel="noreferrer" href="#">
              Profile <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Contests
            </a>
            <a class="nav-item nav-link" href="#">
              About Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;