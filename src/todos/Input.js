import React, {useState} from 'react';

export default function(props) {
    const [title, setTitle] = useState('');
    const onChange = e => setTitle(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    };
    return (
        <form className='p-4 d-flex justify-content-center bg-dark' style={{opacity:0.9}} onSubmit={onSubmit}>
            <input type='text' className='px-2 me-3 rounded' name='title' placeholder='Add todo...' value={title} onChange={onChange} maxLength='60' minLength='5' style={{outline:'none',boxShadow:'none'}}/>
            <input type='submit' className='btn btn-success btn-sm' value='Submit'/>
        </form>
    );
};