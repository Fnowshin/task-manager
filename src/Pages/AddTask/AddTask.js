import React from 'react';
import Header from '../Shared/Header';
import TaskForm from './TaskForm';

const AddTask = (props) => {
    return (
       <div>
          <Header></Header>
          <TaskForm></TaskForm>
        </div>
          
        
    );
};

export default AddTask;