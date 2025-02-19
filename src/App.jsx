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
    const [todoInProgress, setTodoInProgress] = useState([
        'todo4',
        'todo5',
        'todo6',
    ]);
    const [todoCompleted, setTodoCompleted] = useState([]);

    const onChangeInput = (e) => {
        setText(e.target.value);
    };
    const onClickAdd = () => {
        if (text.trim() === '') {
            alert('空白は許可されていません');
            return;
        }
        setTodoNotStarted([...todoNotStarted, text]);
        setText('');
    };
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
                    notStarted={todoNotStarted}
                    inProgress={todoInProgress}
                    completed={todoCompleted}
                    setNotStarted={setTodoNotStarted}
                    setInProgress={setTodoInProgress}
                    setCompleted={setTodoCompleted}
                />
                <TodoList
                    backgroundColor="blue"
                    title={'着手中'}
                    todos={todoInProgress}
                    notStarted={todoNotStarted}
                    inProgress={todoInProgress}
                    completed={todoCompleted}
                    setNotStarted={setTodoNotStarted}
                    setInProgress={setTodoInProgress}
                    setCompleted={setTodoCompleted}
                />

                <TodoList
                    backgroundColor="green"
                    title={'完了'}
                    todos={todoCompleted}
                    notStarted={todoNotStarted}
                    inProgress={todoInProgress}
                    completed={todoCompleted}
                    setNotStarted={setTodoNotStarted}
                    setInProgress={setTodoInProgress}
                    setCompleted={setTodoCompleted}
                />
            </div>
        </>
    );
};

export default App;
