import React, {useState, useEffect} from 'react';

import Header from './Header';
import Input from './Input';
import Todos from './Todos';

export default function() {
    const [todos, setTodos] = useState(() => {
      const todos = JSON.parse(localStorage.getItem("todos"));
      return todos || [];
    });
    const addTodo = title => {
        if (title.trim()) {
            let titleExist = false;
            for (let todo of [...todos]) {
                if (todo.title.toLowerCase() === title.toLowerCase()) {
                    titleExist = true;
                    break;
                }
            }
            titleExist ? alert('Todo already exits!') : setTodos([...todos,{id:(new Date()).getTime(),title:title,completed: false}]);
        }
        else
            alert('Sorry, you cannot submit empty form!');
    };
    const updateCheckBox = id => {
        setTodos(prevTodos => (prevTodos.map(todo => {
                if(todo.id === id) {
                    return {...todo,completed:!todo.completed};
                }
                return todo;
            })
        ));
    };
    const editTodo = (id,title) => {
        let titleExist = false;
        for (let todo of [...todos]) {
            if (todo.title.toLowerCase() === title.toLowerCase() && todo.id !== id) {
                titleExist = true;
                break;
            }
        }
        if (titleExist) {
            alert('Todo already exits!');
        }
        else {
            setTodos(prevTodos => (prevTodos.map(todo => {
                    if(todo.id === id) {
                        return {...todo, title:title};
                    }
                    return todo;
                })
            ));
        }
    };
    const delTodo = id => {
      setTodos([...todos.filter(todo => todo.id !== id)]
      );
    };
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <>
            <Header/>
            <Input addTodo={addTodo}/>
            <Todos todos={
                todos
                .sort((a,b) => b.id - a.id)
                .sort((a,b) => a.completed - b.completed)
            } delTodo={delTodo} updateCheckBox={updateCheckBox} editTodo={editTodo}/>
        </>
    )
}