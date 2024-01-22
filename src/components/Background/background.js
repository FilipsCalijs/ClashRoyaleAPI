import './background.scss';
import enemyBar from '../../img/enemyBar.png';
import ourBar from '../../img/ourBar.png';



const BackgroundImg = () => {
    return (

        <div className="app__banner">
               <img className="top-image" src={enemyBar} alt="top image" /> 
               <div className="content">

               <p className='chose-you-card'>Chose Your Card</p>
               </div>
               <img className="bottom-image" src={ourBar} alt="top image" /> 
        </div>
    )
}

export default BackgroundImg;