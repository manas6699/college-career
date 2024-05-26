import './home.css'
import heroImage from '../assets/hero.jpg'
import Contacts from '../components/Contacts'
import Records from '../components/Records'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="home-container">
                    <section className="hero-section">
                        <img src={heroImage} alt="Hero" className="hero-image" />
                        <div className="hero-content">
                            <h1>Welcome to GCETTB Placement Portal</h1>
                            <p>Your gateway to a successful career start!</p>
                            <a href="/event" className="cta-button">Get Started</a>
                        </div>
                    </section>
                </div>

                <section className="stats-section">
                    <h1 className='heading'>Placement Statistics</h1>
                    <p style={{ font: 'menu', fontStyle: 'oblique' }}>
                        Here are some of the statistics from our previous placement drives.
                        These numbers are a testament to the quality of education and training we provide to our students.
                    </p>
                    <div className="stats-container">
                        <div className="stat">
                            <h3>Companies Visited</h3>
                            <p>50</p>
                        </div>
                        <div className="stat">
                            <h3>Students Placed</h3>
                            <p>120</p>
                        </div>
                        <div className="stat">
                            <h3>Highest Package</h3>
                            <p>100,000</p>
                        </div>
                    </div>
                </section>
            </div>
            <Records />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Home