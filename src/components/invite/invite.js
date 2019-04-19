import React from 'react'
import styled from 'styled-components'

const Invite = styled(() =>(
    <div id="fh5co-couple">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                    <h2>Convidamos você</h2>
                    <h3>14 de Setembro, 2019 São Paulo, SP</h3>
                    <p>Para nosso casamento na Igreja Evangélica de Pinheiros em Ermelinno Matarazzo</p>
                    <p>Rua Noel José da Silva,161</p>
                </div>
            </div>
            <div className="couple-wrap animate-box">
                <div className="couple-half">
                    <div className="groom">
                        <img src="images/lehbrufotos/noivo.jpg" alt="groom" className="img-responsive" />
                    </div>
                    <div className="desc-groom">
                        <h3>Bruno Damasceno</h3>

                    </div>
                </div>
                <p className="heart text-center"><i className="icon-heart2"></i></p>
                <div className="couple-half">
                    <div className="bride">
                        <img src="images/lehbrufotos/noiva.jpg" alt="groom" className="img-responsive" />
                    </div>
                    <div className="desc-bride">
                        <h3>Letícia Soares</h3>

                    </div>
                </div>
            </div>
        </div>
    </div>
))`
#fh5co-couple-story  {
    background-color: #7b1e15;
    color: #fff;
}

#fh5co-testimonial,
#fh5co-services,
#fh5co-started,
#fh5co-footer,
#fh5co-event,
#fh5co-couple-story,
#fh5co-couple,
#fh5co-gallery,
.fh5co-section {
    padding: 7em 0;
    clear: both;
}
@media screen and (max-width: 768px) {
    #fh5co-testimonial,
    #fh5co-services,
    #fh5co-started,
    #fh5co-footer,
    #fh5co-event,
    #fh5co-couple-story,
    #fh5co-couple,
    #fh5co-gallery,
    .fh5co-section {
    padding: 3em 0;
}
}

.fh5co-section-gray {
    background: rgba(0, 0, 0, 0.04);
}

.couple-wrap {
    width: 90%;
    margin: 0 auto;
    position: relative;
}
@media screen and (max-width: 768px) {
    .couple-wrap {
    width: 100%;
}
}

.heart {
    position: absolute;
    top: 4em;
    left: 0;
    right: 0;
    z-index: 99;
    animation: pulse 1s ease infinite;
}
.heart i {
    font-size: 20px;
    background: #fff;
    padding: 20px;
    color: #dc2321;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
}
@media screen and (max-width: 768px) {
    .heart {
    display: none;
}
}

.couple-half {
    width: 50%;
    float: left;
}
@media screen and (max-width: 768px) {
    .couple-half {
    width: 100%;
}
}
.couple-half h3 {
    font-family: "Sacramento", Arial, serif;
    color: #ea200c;
    font-size: 40px;
    font-weight: bold;
}
.couple-half .groom, .couple-half .bride {
    float: left;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    width: 150px;
    height: 150px;
}
.couple-half .groom img, .couple-half .bride img {
    width: 150px;
    height: 150px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
}
@media screen and (max-width: 480px) {
    .couple-half .groom, .couple-half .bride {
    width: 100%;
    height: 140px;
}
    .couple-half .groom img, .couple-half .bride img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
}
}
.couple-half .groom {
    float: right;
    margin-right: 5px;
}
.couple-half .bride {
    float: left;
    margin-left: 5px;
}
.couple-half .desc-groom {
    padding-right: 180px;
    text-align: right;
}
.couple-half .desc-bride {
    padding-left: 180px;
    text-align: left;
}
@media screen and (max-width: 480px) {
    .couple-half .groom, .couple-half .bride {
    margin-left: 0;
    margin-right: 0;
}
    .couple-half .desc-groom {
    padding-right: 0;
    text-align: center;
}
    .couple-half .desc-bride {
    padding-left: 0;
    text-align: center;
}
}
`
export default Invite
