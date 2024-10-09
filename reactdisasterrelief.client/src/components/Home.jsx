import { Link } from 'react-router-dom';
import './Home.css';
import getHelpImage from '../assets/truck-disaster-relief.jpg';
import Boxes from './Boxes.jsx';


function Home() {
    console.log("Home component rendered");
    return (
        <>
            <div className="home-container">
                <h1>Welcome to the Disaster Relief Application</h1>
                <div className="image-container">
                    <div className="image-item">
                        <img src={getHelpImage} alt="Get Help" />
                        <Link to="/get-help" className="home-button">Get Help</Link>
                    </div>

                    <div className="image-item">
                        <img src={getHelpImage} alt="Donate" />
                        <Link to="/donate" className="home-button">Donate</Link>
                    </div>

                    <div className="image-item">
                        <img src={getHelpImage} alt="Get Help" />
                        <Link to="/volunteer" className="home-button">Volunteer</Link>
                    </div>

                </div>
            </div>
            <Boxes />
        </>

    );
}



export default Home;