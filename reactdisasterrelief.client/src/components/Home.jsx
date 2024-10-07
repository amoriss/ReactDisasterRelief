import { Link } from 'react-router-dom';
import './Home.css';
import getHelpImage from '../assets/truck-disaster-relief.jpg';
function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Disaster Relief Application</h1>
            <div className="image-item">
                <img src={getHelpImage} alt="Get Help" />
                
            </div>
            <Link to="/get-help" className="home-button">Get Help</Link>
            <div className="image-item">
                <img src={getHelpImage} alt="Get Help" />

            </div>
            <Link to="/donate" className="home-button">Donate</Link>
            <div className="image-item">
                <img src={getHelpImage} alt="Get Help" />

            </div>
            <Link to="/volunteer" className="home-button">Volunteer</Link>
        </div>
    );
}

export default Home;