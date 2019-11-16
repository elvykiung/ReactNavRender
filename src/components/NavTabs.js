import React from "react";

function NavTabes(props) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
          href="#home"
          onClick={() => props.handlePageChange("Home")}
        >
          Home
        </a>
      </li>

      <li className="nav-item">
        <a
          className={
            props.currentPage === "About" ? "nav-link active" : "nav-link"
          }
          href="#About"
          onClick={() => props.handlePageChange("About")}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          className={
            props.currentPage === "Blog" ? "nav-link active" : "nav-link"
          }
          href="#Blog"
          onClick={() => props.handlePageChange("Blog")}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
          href="#Contact"
          onClick={() => props.handlePageChange("Contact")}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabes;
