import { FaHandHoldingHeart } from "react-icons/fa";


const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <p>&copy; <span>{currentYear}</span> Olasunkanmi github repo. All rights reserved.</p>
        </footer>
    )
}

export default Footer
    