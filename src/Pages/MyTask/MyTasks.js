import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header';


const MyTask = (props) => {
    const tasks = useLoaderData()
    const [task, setTask] = useState(tasks)

    const handleDelete = id => {
        const proceed = window.confirm('You Want to Delete Your Review')
        if (proceed) {
            fetch(`http://localhost:5000/task/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Task Deleted Successfully');
                        const remaining = tasks.filter(t => t._id !== id);
                        setTask(remaining)
                    }
                })
        }
    }

    const handleCompletedTask = event => {
        event.preventDefault();
       
        const taskName = {
            task
        }
    fetch('http://localhost:5000/completedTask', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(taskName)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                toast('Task Completed Succefully')
            }
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            <Header></Header>
            <div className='md:mx-20'>
                <h2 className='font-bold text-2xl mt-12'> You Added {task.length} Task!</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 mx-12'>
                    {
                        task.map(task => <div className='mt-6'
                            key={task._id}>
                            <div className=" max-w-md rounded-md shadow-md bg-gray-900 text-gray-100">
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-semibold ">{task.name}</h2>

                                    </div>
                                    <button onClick={() => handleDelete(task._id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900">Delete</button>
                                    <Link to={`/completedtask/${task._id}`}>
                                        <button onClick={handleCompletedTask} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900">Completed</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTask;