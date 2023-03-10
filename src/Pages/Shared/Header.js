import React, { useContext } from 'react';
import { Navbar } from 'flowbite-react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = (props) => {

    const {logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then ( () => {})
        .catch (error => console.error(error))
      }

    
    return (
        <div className="bg-green-400" >
            <Navbar 
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand on >
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Zj7WDUa7A38zmFKltRmhKyPUU_DGovI47xRypvTwY7BSD4KDRv1IEGDK1oaKMKH6TTE&usqp=CAU"
                        className="mr-3 h-6 sm:h-9"
                        alt="Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-success">
                        TaskMan
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink className="text-green-400"
                        to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink to='/addtask' className="text-green-400" >
                        Add Task 
                    </NavLink>
                    <NavLink className="text-green-400" to="/alltask">
                        My Task
                    </NavLink>
                    <NavLink className="text-green-400" to='/completedtask'>
                        Completed task
                    </NavLink>
                    <NavLink className="text-green-400" to='/login'>
                        Login 
                    </NavLink>
                    <NavLink onClick={handleLogOut} className="text-green-400" to='/login'>
                        Logout 
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;