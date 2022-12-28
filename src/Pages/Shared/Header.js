import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
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
                    <Navbar.Link className="text-green-400"
                        href="/"
                    >
                        Home
                    </Navbar.Link>
                    <NavLink to='/addtask' className="text-green-400" >
                        Add Task 
                    </NavLink>
                    <Navbar.Link className="text-green-400" href="/navbars">
                        My Task
                    </Navbar.Link>
                    <Navbar.Link className="text-green-400" href="/navbars">
                        Completed task
                    </Navbar.Link>
                    <Navbar.Link className="text-green-400" href="/navbars">
                        Login 
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;