import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header';

const CompletedTask = (props) => {
    const completeTask = useLoaderData();
    const [task, setComplteTask] = useState(completeTask)

    const handleDelete = id => {
        const proceed = window.confirm('You Want to Delete Your Review')
        if(proceed){
            fetch(`http://localhost:5000/completedTask/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0){ 
                    alert('Task Deleted Successfully');
                    const remaining = task.filter(t => t._id !== id);
                    setComplteTask(remaining)
                }
            })
        }
    }

    return (
        <div>
            <Header></Header>
           <div className='md:mt-24 mt-10'>
           <h2 className='md:my-14 my-8 text-xl font-semibold '> You can update {task.Array.name} Task </h2>
            <div className="mx-auto max-w-md rounded-md shadow-md bg-gray-900 text-gray-100">
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-semibold ">{task.name}</h2>
                                       
                                    </div>
                                    <button onClick={() => handleDelete(task._id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900">Delete</button>
                                    <Link to='/alltask'>
                                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900">Not Completed</button>
                                    </Link>
                                </div>
                            </div>
           </div>
        </div>
    );
};

export default CompletedTask;