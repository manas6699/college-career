import './contact.css';
import Contact from '../assets/Contact.png';

const Contacts = () => {
    return (
        <div className="contact-container my-4">
            <div className="contact-content">
                <div className="contact-form">
                    <h2 className="header my-4">Contact Us</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" id="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <button type="button" className="btn btn-success mb-5">Submit</button>
                </div>
                <div className="contact-image">
                    <img src={Contact} alt="Contact Us" />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
