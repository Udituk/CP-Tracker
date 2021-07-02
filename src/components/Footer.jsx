import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div style={{position:"fixed",left:"0px", bottom:"0px", zIndex:"1", width:"100%", backgroundColor:"#F8F9FA"}}>
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          <p>
            Copyright ⓒ {year}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Udituk/CP-Tracker"
              style={{ color: "black", textDecoration: "none" }}
            >
              CP-Tracker
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
