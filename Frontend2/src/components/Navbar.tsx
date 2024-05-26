
import Logo from '../assets/logo192.png';
import './navbar.modules.css';

import Modal from './Modal';


const Navbar = () => {
    return (
        <>
            <nav className='container'>
                <a href='/'>
                    <img src={Logo} alt="logo" width={50} />
                </a>
                <h1 className='center'>GCETTB PLACEMENT STAT</h1>
               <Modal />
                <a href="/event">Events</a>
             
            </nav>
         
        </>
    );
};

export default Navbar;
