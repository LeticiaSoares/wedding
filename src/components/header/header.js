import React from 'react'

const messages = {
    days: {
        plural: 'Days',
        singular: 'Day',
    },
    hours: 'Hours',
    mins: 'Min',
    segs: 'Seg',
}
const Header = () =>(
    <header id="fh5co-header" className="fh5co-cover" role="banner" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <div className="display-t">
                        <div className="display-tc animate-box" data-animate-effect="fadeIn">
                            <h1>Bruno &amp; Leticia</h1>
                            <h2>Nós Vamos se Casar!</h2>
                            <div className="simply-countdown simply-countdown-one"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

)

export default Header