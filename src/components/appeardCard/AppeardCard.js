import React from 'react';
import './AppeardCard.css'; 

const AppeardCard = () => {
    return (
        <div className="appeard-card-container">
            <p className='chose-you-card'>Chose Your Card</p>


            <div className="card-images-container">
                <img className="card-image" src="" alt="Card 1" />
                <div className="spacer"></div> 
                <img className="card-image" src="путь_к_изображению_2" alt="Card 2" />
            </div>
        </div>
    );
}

export default AppeardCard;
