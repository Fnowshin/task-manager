import React from 'react';
import book from '../Images/home.png'

const Task = (props) => {
    return (

        <section>
        <div className="bg-green-800">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white-900">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">Provident blanditiis cum exercitationem</h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                <div className="flex flex-wrap justify-center">
                    <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-green-400">Get started</button>
                    <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
                </div>
            </div>
        </div>
        <img src="https://elearningindustry.com/wp-content/uploads/2016/03/conducting-a-successful-task-analysis-6-benefits-you-cannot-overlook-e1457012771169.jpg" alt="" className="w-1/2 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
    </section>

    );
};

export default Task;