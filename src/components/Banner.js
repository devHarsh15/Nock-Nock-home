import React from 'react'
import '../styles/Banner.css'
import home from '../icons/home4.jpg'

export default function Banner() {
    return (
        <div id="banner" style={{ background: `url(${home})`, backgroundSize: "cover", backgroundPosition: "center center"}} className="jumbotron">
            <p>GET A $5,000 INTEREST-FREE RENOVATION ADVANCE</p>
            <br />
            <h3 id="PT"><strong style={{color: "rgb(57, 180, 218)"}}>Buy</strong> your home from the</h3>
            <h3 id="PT">Comfort of your couch</h3>
            <br />
            <p>GET READY FOR A REAL ESTATE EXPERIENCE</p>
            <p>UNLIKE YOU'VE EVER HADE BEFORE</p>
        </div>
    )
}
