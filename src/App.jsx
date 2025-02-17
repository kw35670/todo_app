import react from 'react';

import TodoList from './components/TodoList';
import Button from './components/Button';

const App = () => {
    return (
        <div>
            <h1>React Todo App</h1>
            <div className="todo-lists">
                <TodoList backgroundColor="red" title={'未着手'} />
            </div>
            <div className="todo-lists">
                <TodoList backgroundColor="blue" title={'着手中'} />
            </div>
            <div className="todo-lists">
                <TodoList backgroundColor="green" title={'完了'} />
            </div>
        </div>
    );
};

export default App;
