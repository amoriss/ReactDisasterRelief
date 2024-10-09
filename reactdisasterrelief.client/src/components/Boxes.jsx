import { Link } from 'react-router-dom';
import './Boxes.css';


function Boxes() {
    return (
        /* Boxes*/
        <div className="boxes-container">
            <div className="box">
                <Link to="/donate" className="box-link">
                    <h2><em>Press</em> <strong>Releases</strong></h2>
                </Link>
            </div>
            <div className="box">
                <Link to="/donate" className="box-link">
                    <h2><em>Upcoming</em> <strong>Events</strong></h2>
                </Link>
            </div>
            <div className="box">
                <Link to="/donate" className="box-link">                
                    <h2><em>Join</em> <strong>Our Team</strong></h2>
                </Link>
            </div>
            <div className="box">
                <Link to="/donate" className="box-link">
                    <h2><em>Most Needed</em> <strong>Supplies</strong></h2>
                </Link>
            </div>

        </div>


    );
}

export default Boxes;