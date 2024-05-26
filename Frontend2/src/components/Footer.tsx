
import './footer.modules.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Information</h3>
                    <p>123 College Road,<br />City, State, ZIP</p>
                    <p>Email: info@college.edu</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                  
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GCETTB. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
