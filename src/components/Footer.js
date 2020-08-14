import React from 'react'
import '../styles/Footer.css'
import nocklogo from '../icons/nock-nock-allwht.png'
import facebook from '../icons/Facebook.png'
import twitter from '../icons/Twitter.png'
import insta from '../icons/Instagram.png'

export default function Footer() {
    return (
        <div id="footer" className="Jumbotron">
            <div style={{ padding: "3rem 0" }} className="container-xl">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="row">
                    <div id="footer-1" className="col-md-4">
                        <img src={nocklogo} alt="..." className="img-fluid" />
                        <br />
                        <br />
                        <p>nock nock provides the buyers with ultimte in Real State experiences while dealing with only the top 1% of handpicked Real Estate agents in Canada</p>
                    </div>
                    <div id="footer-2" className="col-md-3">
                        <h5><strong>Top Searches</strong></h5>
                        <div>
                            <p>Real Estate Agent near me</p>
                            <p>Real Estate Agent in Toronto</p>
                            <p>Real Estate Agent in Oakville</p>
                            <p>Real Estate Agent in Milton</p>
                        </div>
                    </div>
                    <div id="footer-3" className="col-md-3">
                        <p>Real Estate Agent in hamilton</p>
                        <p>Real Estate Agent in Toronto</p>
                        <p>Real Estate Agent in Oakville</p>
                        <p>Real Estate Agent in Milton</p>
                    </div>
                    <div id="footer-4" className="col-md-2">
                        <h5>FOLLOW US</h5>
                        <div className="icons">
                            <img src={facebook} alt="..." className="img-fluid"/>
                            <img src={twitter} alt="..." className="img-fluid"/>
                            <img src={insta} alt="..." className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <hr />
                <p><small>Copyright Text</small></p>
            </div>
        </div>
    )
}
