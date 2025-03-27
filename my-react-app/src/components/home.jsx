
import React from 'react';
import  './styles/home.css';
import Navbar from './navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <h1>Welcome to the Home Page</h1>
      <p>U-LEARN, Inc. is an education technology company, founded in May 2010 by Eren Bali, Gagan Biyani, and <br/>Oktay Caglar. It is based in San Francisco, California, United States. The platform hosts online courses,<br/> mostly connected to job-related skills..</p>
    </div>
    </>
  );
};

export default Home;
