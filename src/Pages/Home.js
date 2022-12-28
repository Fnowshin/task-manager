
import React from 'react';
import { Outlet } from 'react-router-dom';
import Task from './Components/Task';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <Task></Task>
            <Footer></Footer>
        </div>
    );
};

export default Home;