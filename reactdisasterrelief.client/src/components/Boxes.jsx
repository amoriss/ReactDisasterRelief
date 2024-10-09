import { Link } from 'react-router-dom';
import './Boxes.css';


function Boxes() {
    return (
        /* Boxes*/
        <div className="boxes-container">
            <div className="box">
                <Link to="/donate" className="box-link">Box 1 Link</Link>
            </div>
            <div className="box">
                <Link to="/donate" className="box-link">Box 2 Link</Link>
            </div>
            <div className="box">
                <Link to="/donate" className="box-link">
                    {/*<div className="box-title">Box 3</div>*/}
                    {/*<p>Link</p>*/}
                    <h2><em>Press</em> <strong>Releases</strong></h2>
                </Link>
            </div>
            <div className="box">
                <Link to="/donate" className="box-link">Box 4 Link</Link>
            </div>

        </div>


    );
}

export default Boxes;