import React from 'react'
import '../styles/Banner.css'
import home from '../icons/home4.jpg'

export default function Banner() {
    return (
        <div id="banner" style={{ background: `url(${home})`, backgroundSize: "cover", backgroundPosition: "center center" }} className="jumbotron">
            <p>GET A $5,000 INTEREST-FREE RENOVATION ADVANCE</p>
            <br />
            <h3 id="PT"><strong style={{ color: "rgb(57, 180, 218)" }}>Buy</strong> your home from the</h3>
            <h3 id="PT">Comfort of your couch</h3>
            <br />
            <p>GET READY FOR A REAL ESTATE EXPERIENCE</p>
            <p>UNLIKE YOU'VE EVER HADE BEFORE</p>
            <br />
            <div id="search" className="input-group mb-3">
                <input type="text" className="form-control" placeholder="City or Poastal Code" aria-label="City or Poastal Code" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-info" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <br />
            <a href="..." className="financing"><small>NEED FINANCING?</small></a>
        </div>
    )
}
