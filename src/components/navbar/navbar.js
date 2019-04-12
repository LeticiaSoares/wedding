import React from 'react'
const navbar = styled(({className}) =>(
    //fh5co-nav
    <nav className={className} role="navigation">
        <div className="container">
            <div className="row">
                <div className="col-xs-2">
                    <div id="fh5co-logo"><a href="index.html">Casamento<strong>.</strong></a></div>
                </div>
                <div className="col-xs-10 text-right menu-1">
                    <ul>
                        <li className="active"><a href="index.html">Início</a></li>
                        <li><a href="fh5co-couple">Convite</a></li>
                        <li><a href="#fh5co-gallery">Nossas Fotos</a></li>
                        <li><a href="#fh5co-couple-story">Nossa História</a></li>
                        <li><a href="#">Lista de Casamento</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>
))`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 40px 0;
  z-index: 1001;
  @media screen and (max-width: 768px) {
  .fh5co-nav {
    padding: 20px 0;
  }
}
.fh5co-nav #fh5co-logo {
  font-size: 40px;
  margin: 0;
  padding: 0;
  line-height: 40px;
  font-family: "Sacramento", Arial, serif;
}
.fh5co-nav a {
  padding: 5px 10px;
  color: #fff;
}
@media screen and (max-width: 768px) {
  .fh5co-nav .menu-1, .fh5co-nav .menu-2 {
    display: none;
  }
}
.fh5co-nav ul {
  padding: 0;
  margin: 2px 0 0 0;
}
.fh5co-nav ul li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline;
}
.fh5co-nav ul li a {
  font-size: 14px;
  padding: 30px 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.fh5co-nav ul li a:hover, .fh5co-nav ul li a:focus, .fh5co-nav ul li a:active {
  color: white;
}
.fh5co-nav ul li.has-dropdown {
  position: relative;
}
.fh5co-nav ul li.has-dropdown .dropdown {
  width: 130px;
  -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
  z-index: 1002;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 40px;
  left: 0;
  text-align: left;
  background: #fff;
  padding: 20px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: 0s;
  -o-transition: 0s;
  transition: 0s;
}
.fh5co-nav ul li.has-dropdown .dropdown:before {
  bottom: 100%;
  left: 40px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 8px;
  margin-left: -8px;
}
.fh5co-nav ul li.has-dropdown .dropdown li {
  display: block;
  margin-bottom: 7px;
}
.fh5co-nav ul li.has-dropdown .dropdown li:last-child {
  margin-bottom: 0;
}
.fh5co-nav ul li.has-dropdown .dropdown li a {
  padding: 2px 0;
  display: block;
  color: #999999;
  line-height: 1.2;
  text-transform: none;
  font-size: 15px;
}
.fh5co-nav ul li.has-dropdown .dropdown li a:hover {
  color: #000;
}
.fh5co-nav ul li.has-dropdown:hover a, .fh5co-nav ul li.has-dropdown:focus a {
  color: #fff;
}
.fh5co-nav ul li.btn-cta a {
  color: #F2B73F;
}
.fh5co-nav ul li.btn-cta a span {
  background: #fff;
  padding: 4px 20px;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  border-radius: 100px;
}
.fh5co-nav ul li.btn-cta a:hover span {
  -webkit-box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75);
}
.fh5co-nav ul li.active > a {
  color: #fff !important;
}

`

export default navbar