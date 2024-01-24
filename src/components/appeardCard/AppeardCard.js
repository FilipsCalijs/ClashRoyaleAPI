import React from 'react';
import './appeardCard.scss'; 
import GuardsCard from '../../img/GuardsCard.webp';



const AppeardCard = () => {
    return (
        <div className="appeard-card-container">
            <p className='chose-your-card'>Chose Your Card</p>

            <div className="card-images-container">
                <div className="card-item">
                    <img className="card-image" src={GuardsCard} alt="Card 1" />
                    <div className="elexir-image">
                        <div className='elexir'>5</div>
                    </div>
                </div>
                
                
                <div className="spacer"></div>
                <div className="card-item">
                    <img className="card-image" src={GuardsCard} alt="Card 1" />
                    <div className="elexir-image-2">
                        <div className='elexir'>6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppeardCard;