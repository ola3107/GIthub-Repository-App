import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const closeSidebar = () => document.querySelector('.sidebar').style.display = 'none';
    const openSidebar = () => document.querySelector('.sidebar').style.display = 'block';
    const redirectToGithub = () => {
        window.location.href = 'https://github.com/ola3107';
    };
    return (
        <header>
            <h2>Ola<span>sunkanmi</span><FaGithub className='github-icon' /></h2>
            
            <nav className='large-screen'>
                <ul className='large-screen'>
                    <li>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/Repositories" className='link'>Repositories</Link>
                    </li>
                </ul>
            </nav>

            <button className='btn-large-screen' onClick={redirectToGithub}>Go To Github</button>
            <ImMenu className='open-sidebar' onClick={openSidebar}/>

            <nav className="sidebar">
                <ul onClick={closeSidebar}>
                    <IoMdClose className='close-sidebar' onClick={closeSidebar}/>
                    <li onClick={closeSidebar}>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li onClick={closeSidebar}>
                        <Link to="/Repositories" className='link'>Repositories</Link>
                    </li>
                    <button onClick={redirectToGithub}>Go To Github</button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;