import React,{ useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import {Link} from 'react-router-dom';

const Repositories = () => {

    const [currentPosition, setCurrentPosition] = useState(0); 
    const [loading, setLoading] = useState(true);
    const [listItems, setListItems] = useState([]);
    const [value, setValue] = useState('');
    const btn = document.querySelector('.btn-repo')
    const NoRepoFound = document.querySelector('.no-repo-found')
    const sortOption = ["language", "JavaScript", "CSS", "HTML"]







    
    function fetchRepos() {
    
        return fetch(`https://api.github.com/users/ola3107/repos?per_page=4&page=${currentPosition}`)
            .then(response => response.json())
            .then(data => {
                setListItems(data);
                if (data.length === 0) {
                    setCurrentPosition(0);
                }
            });
    }

   
    
    useEffect(() => {
        fetchRepos();
        setLoading(false)
        
    },[currentPosition])

    const userElement = listItems.map((item) => {
        return (
            <div className="repo-item"  key={item.name}>
                <div className="repo-item-top">
                    <h2>
                        <Link to={`/SingleRepoDetails/${item.name}`} className="repo-link">
                            {item.name}
                        </Link>
                    </h2>
                    <p>{item.visibility}</p>
                </div>
                <p>{item.language}</p>
                <p>Created At: {item.created_at}</p>
            </div>
        )
    })

    const handleSearch = () => {
        const username = 'ola3107';
        const searchQuery = encodeURIComponent(value);
        fetch(`https://api.github.com/search/repositories?q=user:${username}+${searchQuery}&per_page=4`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if(data.items.length < 4){
                btn.style.display = 'none'
            }
            if(data.items.length <= 0){
                NoRepoFound.style.display = 'block';
                setTimeout(() => {NoRepoFound.style.display = 'none'}, 3000)
            }
            setListItems(data.items);
            console.log(listItems);
            setValue('');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    }

    const handleReset = (e) => {
        e.preventDefault();
        fetchRepos();
        btn.style.display = 'flex'
    }

    

    const handleNextPage = (e) => {
        e.preventDefault();
        setCurrentPosition(prevPosition => prevPosition + 1)
    }

    const handlePrevPage = (e) => {
       
        const nextPagePosition = currentPosition - 1;
        if (nextPagePosition < 0) {
            setCurrentPosition(0);
        } else {
            setCurrentPosition(nextPagePosition);
        }
    }

    const handleFilter = (value) => {
        const username = 'ola3107';
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                const filteredRepos = data.filter(repo => repo.language === value);
                if (filteredRepos) {
                    btn.style.display = 'none'
                }
                setListItems(filteredRepos);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }


    return (
        <section className="main-repo">
            <section className="repo-head">
                <h2>Repositories</h2>
                <p>Here you can view all the repositories available.</p>
            </section>
            <form className="repo-search" onSubmit={handleSubmit}>
                <div className="search-repo">
                    <input type="text" placeholder="Search Repositories" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button type="submit" className="search-icon">
                        <FaSearch />
                    </button>
                </div>
                <button onClick={handleReset}>Reset</button>
            </form>
            <div className="button-control">
                <select onChange={(e) => handleFilter(e.target.value)}>
                    <option value="">Filter by Language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                </select>
            </div>
            <div className="no-repo-found">
                <p>Sorry!!!, No Repo for <span>{value}</span> found</p>
            </div>
            <section className="repo">
                {loading ? <h1>Loading...</h1> :userElement}
            </section>
            <div className="btn-repo">
                <button onClick={handlePrevPage} type="submit">prev</button>
                <button onClick={handleNextPage}>next</button>
            </div>

            
        </section>
    );
}

export default Repositories