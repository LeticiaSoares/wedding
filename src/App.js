import React, { Component } from 'react';
import Navbar from './components/navbar'
import './App.css';
import Header from "./components/header";
import Invite  from "./components/invite";
import OurHistory  from "./components/ourHistory";
import Galery  from "./components/galery";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="fh5co-loader"></div>
          <div id="page">
                <Navbar />
                <Header/>
                <Invite />
                <OurHistory />
                <Galery />
          </div>
          <div className="gototop js-top">
              <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
