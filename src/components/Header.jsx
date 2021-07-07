import React from "react";

function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="./">
          <img
            src={process.env.PUBLIC_URL + '/images/cp-tracker-logo-short-rounded.png'}
            width="70"
            height="70"
            alt="cp-tracker-logo-short-rounded"
            border="0"
          />
          {""} CP Tracker
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
            <a
              class="nav-item nav-link active"
              rel="noreferrer"
              href="./profile"
            >
              Profile <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="./contests">
              Contests
            </a>
            <a class="nav-item nav-link" href="./login">
              Login
            </a>
            <a class="nav-item nav-link" href="./aboutus">
              About Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;