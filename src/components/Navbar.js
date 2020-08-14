import React, { useState } from 'react'
import nock from '../icons/nock-nock-logo-wht.png'
import Sidebar from 'react-sidebar'
import SidebarItems from './SidebarItems'

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const onSetSidebar = (open) => {
        setSidebar(open)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="...">
                    <img src={nock} alt="" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="...">Sell</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="...">Buy <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="...">Finance</a>
                        </li>
                    </ul>
                </div>
                <Sidebar
                    sidebar={<SidebarItems />}
                    open={sidebar}
                    onSetOpen={onSetSidebar}
                    styles={{ sidebar: { background: "rgb(57, 180, 218)", width: "40rem", } }}
                    pullRight={true}
                >
                    <button onClick={() => onSetSidebar(true)}>Open</button>
                </Sidebar>
            </nav>
        </div>
    )
}
