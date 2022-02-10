import React, {useState} from 'react';

export default function({todo,updateCheckBox,delTodo,editTodo}) {
    const [editMode, setMode] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const onToggleBox = () => {
        updateCheckBox(todo.id);
    }
    const onChangeEdit = e => setTitle(e.target.value);
    const onClickDel = () => {
        if (window.confirm('Are you sure to delete it?'))
            delTodo(todo.id);
    }
    const onSubmit = e => {
        e.preventDefault();
        title.trim() ? editTodo(todo.id, title) : alert('Sorry, you cannot submit empty form!');
        setMode(false);
    };
    const onClickEdit = () => {
        setTitle(todo.title);
        setMode(true);
    }
    const onBlur = () => setTimeout(() => {
            setMode(false);
            setTitle(todo.title);
        }, 100
    );
    const sentenceCase = s => {
        let words = s.split(' '), word = words[0];
        words[0] = word[0].toUpperCase() + word.slice(1);
        return words.join(' ')
    };
    return (
        <>
            <div className={`py-2 d-flex align-items-center justify-content-between${editMode ? ' d-none' : ''}`}>
                <div className='d-flex align-items-center'>
                    <input type='checkbox' checked={todo.completed} onChange={onToggleBox}/>
                    <span className={`d-inline lh-1 text-break px-3 ${todo.completed ? 'text-decoration-line-through fst-italic text-danger' : ''}`} onClick={onClickEdit}>{sentenceCase(todo.title)}
                    </span>
                </div>
                <input type='button' className='btn btn-danger btn-sm py-1' value='Delete' onClick={onClickDel}/>
            </div>
            <form className={`${editMode ? 'py-2 d-flex w-100 border-0 me-3' : 'd-none'}`} onSubmit={onSubmit}>
                <input type='text' className='px-2 me-3 border-0 rounded w-100 bg-light fst-italic' name='title' value={title} ref={input => input && input.focus()} onChange={onChangeEdit} onBlur={onBlur} style={{boxShadow:'none'}} maxLength='60' minLength='5'/>
                <input type='submit' className='border-0 btn btn-warning btn-sm py-1' value='Edit'/>
            </form>
        </>
    );
}