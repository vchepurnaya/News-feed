import React  from 'react';

import './Preloader.css';

const ToTop: React.FC = () => {
    return (
        <div className="to-top">
            <div className="to-top__item"
                 onClick={() => window[`scrollTo`]({top: 0, behavior: `smooth`})}
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/>
                    <g data-name="Layer 2" id="Layer_2" fill='#bbc8e6'>
                        <path d="M1,16A15,15,0,1,1,16,31,15,15,0,0,1,1,16Zm2,0A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z"/>
                        <path
                            d="M10.41,19.87,16,14.29l5.59,5.58a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41L16.64,12.1a.91.91,0,0,0-1.28,0L9,18.46a1,1,0,0,0,0,1.41H9A1,1,0,0,0,10.41,19.87Z"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default ToTop;
