import react from 'react';
import { useState } from 'react';

import TodoList from './components/TodoList';
import Button from './components/Button';
import InputTodo from './components/InputTodo';

const App = () => {
    const [text, setText] = useState('');
    const [todoNotStarted, setTodoNotStarted] = useState([
        'todo1',
        'todo2',
        'todo3',
    ]);
    const [todoInProgress, setTodoInProgress] = useState([]);
    const [todoCompleted, setTodoCompleted] = useState([]);

    const onChangeInput = (e) => {
        setText(e.target.value);
    };
    const onClickAdd = () => {};
    return (
        <>
            <div className="container">
                <h1 className="title">React Todo App</h1>
                <InputTodo
                    text={text}
                    onChangeInput={onChangeInput}
                    onClickAdd={onClickAdd}
                />
                <TodoList
                    backgroundColor="red"
                    title={'未着手'}
                    todos={todoNotStarted}
                />
                <TodoList
                    backgroundColor="blue"
                    title={'着手中'}
                    todos={todoInProgress}
                />
                <TodoList
                    backgroundColor="green"
                    title={'完了'}
                    todos={todoCompleted}
                />
            </div>
        </>
    );
};

export default App;
