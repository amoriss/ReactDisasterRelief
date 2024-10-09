import './Footer.css';
import facebookIcon from '../assets/icons/icons8-facebook-24.png';
import instagramIcon from '../assets/icons/icons8-instagram-24.png';
import tiktokIcon from '../assets/icons/icons8-tiktok-24.png';
import twitterxIcon from '../assets/icons/icons8-twitterx-24.png';

function Footer() {
    return (
        <footer>
            <h3>Follow Us</h3>
            <div className="footer-image-container">
            <div className="footer-image">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
            </div>
            <div className="footer-image">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
            <div className="footer-image">
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} alt="TikTok" />
                </a>
            </div>
            <div className="footer-image">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterxIcon} alt="Twitter X" />
                </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;