import React from 'react';
import './LandingPageButton.scss';
import "font-awesome/css/font-awesome.min.css";


function LandingPageButton({classname, backgroundColor, borderColor, text, onClick}) {
    return (
        <div className={classname}>
            <button 
                onClick={onClick} 
                className='landing-page-button' 
                style={{backgroundColor: backgroundColor, borderColor: borderColor}} >
                {text} <i className="fa fa-arrow-circle-right" />
            </button>
        </div>
    )
}

export default LandingPageButton
