import React, { Component } from "react";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NavTabs from "./NavTabs";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    }
  };

  render() {
    return (
      <div className="text-center">
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
