import './background.scss';
import enemyBar from '../../img/enemyBar.png';
import ourBar from '../../img/ourBar.png';
import AppeardCard from '../appeardCard/AppeardCard';


const BackgroundImg = () => {
    return (

        <div className="app__banner">
               <img className="top-image" src={enemyBar} alt="top image" /> 
               <div className="content">

                    <AppeardCard/>
               </div>
               <img className="bottom-image" src={ourBar} alt="top image" /> 
        </div>
    )
}

export default BackgroundImg;