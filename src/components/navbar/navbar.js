import React from 'react'
import styled from 'styled-components'

const Navbar = styled(() =>(
    <nav className="fh5co-nav" role="navigation">
        <div className="container">
            <div className="row">
                <div className="col-xs-2">
                    <div id="fh5co-logo"><a href="index.html">Casamento<strong>.</strong></a></div>
                </div>
                <div className="col-xs-10 text-right menu-1">
                    <ul>
                        <li><a href="#fh5co-couple">Convite</a></li>
                        <li><a href="#fh5co-gallery">Nossas memórias</a></li>
                        <li><a href="#fh5co-couple-story">Nossa História</a></li>
                        <li><a href="#">Lista de Casamento</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>
))`
  img {
    object-fit: cover ;
  }
`

export default Navbar