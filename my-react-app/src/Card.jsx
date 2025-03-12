import './Card.css';
import profile from "./assets/image.png";

function Card(){





    return(
         <div className="card">
            <img className='card-image' src={profile} alt="Description" />
            <h2>Abdi</h2>
            <p>Computer science student</p>

         </div>
  

    )
}

export default Card;