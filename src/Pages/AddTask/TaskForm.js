import React from 'react';

const TaskForm = (props) => {
    return (
        <div className='my-20'>
            <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset className="p-4 rounded-sm p-6 rounded-md shadow-xl dark:bg-green-900">

			<div className="col-span-full sm:col-span-3">
					<label for="addtask" className="mx-auto font-bold">Add Task </label>
					<input id="addtask" type="text" placeholder="Add Task" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-green-700 dark:text-gray-900" />
				</div>
                <div>
                <button type="button" className="px-8 py-3 mt-6 font-semibold rounded-full bg-green-400 text-gray-800">Add </button>
                </div>
		</fieldset>
        </form>
        </div>
    );
};

export default TaskForm;