import { Button } from 'flowbite-react';
import React from 'react';

const MyTaskCard = ({ allTask }) => {
    const { task } = allTask
    return (
        <tr>

            <div><p className='font-bold text-xl'>{task}</p></div>

            <td><button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-100 text-gray-900">Delete
                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-green-400">Task </span>
            </button></td>
            <td><button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-100 text-gray-900">Completed
                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-green-400">Task</span>
            </button></td>

        </tr>
    );
};

export default MyTaskCard;