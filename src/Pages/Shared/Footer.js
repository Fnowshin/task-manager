import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <footer className="px-4 divide-y bg-green-400 text-gray-100">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Zj7WDUa7A38zmFKltRmhKyPUU_DGovI47xRypvTwY7BSD4KDRv1IEGDK1oaKMKH6TTE&usqp=CAU" alt="" />
                            </div>
                            <span className="self-center text-2xl font-semibold">TaskMan</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase text-gray-50">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-white-400">© 2022 TaskMan All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;