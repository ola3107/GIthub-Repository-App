import { FaHandHoldingHeart } from "react-icons/fa";


const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <p>Design with <FaHandHoldingHeart className="heart" /> by <a href="mailto:olasunkanmiologun64@gmail.com"> <span>Ola</span>sunkanmi</a></p>
            <p>&copy; <span>{currentYear}</span> Olasunkanmi github repo. All rights reserved</p>
        </footer>
    )
}

export default Footer
    