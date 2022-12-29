import React, { useState } from 'react';


const TaskForm = () => {

    const [task, setTask] = useState('');
    const [updated, setUpdated] = useState('');

    const handleAddedTask = event => {
        event.preventDefault();
        const form = event.target;
        console.log(task);
       

        fetch ('http://localhost:5000/task',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            })
            form.reset();
       
    }


    const handleChange = event => {
        setTask(event.target.value)
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            setUpdated(updated);

        }
    }

    return (
        <div className='my-20'>
            <form onSubmit={handleAddedTask} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="p-4 rounded-sm p-6 rounded-md shadow-xl dark:bg-green-900">

                    <div className="col-span-full sm:col-span-3">
                        <label className="mx-auto font-bold">Add Task </label>
                        <input id="addtask" type="text" name='task' onChange={handleChange}
                            onKeyDown={handleKeyDown} placeholder="Add Task" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-green-700 dark:text-gray-900" />
                    </div>
                    <div>
                        <button type="submit" className="px-8 py-3 mt-6 font-semibold rounded-full bg-green-400 text-gray-800">Add </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default TaskForm;