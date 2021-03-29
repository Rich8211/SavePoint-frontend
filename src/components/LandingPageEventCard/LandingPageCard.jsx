import React from 'react'

function LandingPageCard(title, date, location) {
    return (
        <div className="featured-card">
            <img src={bostonCon} />
            <div className="con-title">
                <h4>{title}</h4>
            </div>
            <div className="con-info">
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
                ratione praesentium blanditiis similique placeat temporibus?
                </p>
            </div>
        </div>
    )
}

export default LandingPageCard
