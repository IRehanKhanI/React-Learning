import profilepic from './assets/profile.jpg'
import './Card.css'

function Card() {
    return (
        <div className="Card">
            <img className="cardImage" alt="Profile picture" src={profilepic} />
            <h2 className="cardHeader">Monk D. Luffy</h2>
            <p className="cardPara">I am going to be the King of the Pirates!</p>
        </div>
    );
}

export default Card;