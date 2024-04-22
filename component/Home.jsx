import {Link} from 'react-router-dom'
const Home = () => {
    const redirectToGithub = () => {
        window.location.href = 'https://github.com/ola3107';
    };
    return (
        <section className="home-main">
            <div className="welcome">
                <h1>Welcome to my Github Repository.</h1>
                <p>Here you can create new repositories, view existing repositories and go to my Github page.</p>
                <div className="btn-home">
                    <button onClick={redirectToGithub}>Go to Github</button>
                    <Link to="/Repositories"><button>see Repositories</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Home;