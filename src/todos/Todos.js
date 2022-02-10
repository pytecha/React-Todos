import React from 'react';
import Todo from './Todo';

export default function(props) {
    const todos = props.todos.map(prop => <Todo key={prop.id} todo={prop} delTodo={props.delTodo} updateCheckBox={props.updateCheckBox} editTodo={props.editTodo}/>);
    const noTodos = (
        <>
            <p className='text-center fs-2 text-danger fw-bold'>Currently Empty!
            </p>
            <p className='text-center text-dark'>
                <span>***</span>
                <small>Add some Todos</small>
                <span>***</span>
            </p>
        </>
    );
    return (
        <div className='card bg-light'>
            <div className='card-header text-center fw-bolder'>
                Todo Lists
            </div>
            <div className='card-body'>
                {todos.length > 0 ? todos : noTodos}
            </div>
            <div className='card-footer text-center fw-small fs-6'>
                <small className='text-info'>&copy; 2022 Caleb@Code. All rights reserved.
                </small>
            </div>
        </div>
    );
};