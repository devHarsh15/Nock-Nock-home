import React from 'react'
import '../styles/sidebarItems.css'
import facebook from '../icons/Facebook.png'
import twitter from '../icons/Twitter.png'
import insta from '../icons/Instagram.png'

export default function SidebarItems() {
    return (
        <div className="sidebaritems" style={{ padding: "50px 90px" }}>
            <p>Agent Directory</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Privacy</p>
            <p>Terms and Conditions</p>
            <hr />
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                <img src={facebook} alt="..." className="img-fluid" />
                <img src={twitter} alt="..." className="img-fluid" />
                <img src={insta} alt="..." className="img-fluid" />
            </div>
        </div>
    )
}
