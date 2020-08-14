import React from 'react'
import mortgage from '../icons/mortgage.png'
import financial from '../icons/financial.png'
import deal from '../icons/deal.png'
import seller from '../icons/seller.png'
import '../styles/Inform.css'

export default function Inform() {
    return (
        <div className="container">
            <div className="row">
                <div id="inform" className="col-md-6">
                    <img src={mortgage} alt="..." />
                    <h5><strong>HAND CURATED PROFESSIONALS</strong></h5>
                    <p>Buying? Selling? Financing? No problem. Our team is hand selected from the best professionals in each specific area of Real Estate.</p>
                </div>
                <div id="inform" className="col-md-6">
                    <img src={financial} alt="..." />
                    <h5><strong>SAVE ON FEES</strong></h5>
                    <p>Pay just 4.5% in fees. Thats just 0.5% less than the traditional 5% and thousands in savings.</p>
                </div>
                <div id="inform" className="col-md-6">
                    <img src={deal} alt="..." />
                    <h5><strong>MAXIMIZE YOUR SALE PRICE</strong></h5>
                    <p>Sell your home at a higher price, and attract more buyers with a $5k interest-free advance for renovations.</p>
                </div>
                <div id="inform" className="col-md-6">
                    <img src={seller} alt="..." />
                    <h5><strong>EXPERTISE AT EVERY STEP</strong></h5>
                    <p>From setting the right list price to closing, you'll be supported by local industry experts.</p>
                </div>
            </div>
        </div>
    )
}
