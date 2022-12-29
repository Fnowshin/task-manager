import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import MyTaskCard from './MyTaskCard';

const MyTask = (props) => {

    const [allTasks, setAllTasks] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/allTasks')
        .then (res => res.json())
        .then (data => setAllTasks(data))
    }, [])

    return (
        <div>
            <Header></Header>
        <div className='mx-12'>
        <h2 className='font-bold text-2xl mt-12'> You Added {allTasks.length} Task!</h2>
        <Table className='m-4'>
  <thead>
    <tr>
      <th> Task </th>
      <th> Delete Task </th>
      <th> Completed Task </th>
    </tr>
  </thead> <br />
  <tbody>
        {
             allTasks.map(allTask => <MyTaskCard
                key={allTask._id}
                allTask={allTask}
            ></MyTaskCard>)
        }
  </tbody>
</Table>
        </div>
    </div>
    );
};

export default MyTask;