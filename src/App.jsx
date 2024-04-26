import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../component/Header.jsx';
import Home from '../Pages/Home.jsx';
import Footer from '../component/footer.jsx';
import Repositories from '../Pages/Repositories.jsx';
import SingleRepoDetails from '../Pages/SingleRepoDetails.jsx';
import AppOutlet from '../component/AppOutlet.jsx';
import FourOfour from '../Pages/FourOfour.jsx';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/ola3107/repos?per_page=4`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repositories" element={<Repositories repos={repos}/>} />
        <Route path="/FourOfour" element={<FourOfour />} />
        <Route path='/SingleRepoDetails' element={<AppOutlet />}>
          <Route path="/SingleRepoDetails/:repoName" element={<SingleRepoDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

