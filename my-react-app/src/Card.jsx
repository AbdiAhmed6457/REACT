import profile from "./assets/image.png";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

function Card( props){





    return(
         <div className= {styles.card}>
            <img className={styles.cardImage}  src={profile} alt="Description" />

            <h2>Hamza</h2>
            <p>Computer science student</p>

         </div>
  

    )
}

  Card.defaultProps = {
    name: "Geust",
  }

export default Card