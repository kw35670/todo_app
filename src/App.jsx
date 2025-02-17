import react from 'react';

import TodoList from './components/TodoList';
import Button from './components/Button';

const App = () => {
    return (
        <div className="container">
            <h1 className="title">React Todo App</h1>
            <TodoList backgroundColor="red" title={'未着手'} />
            <TodoList backgroundColor="blue" title={'着手中'} />
            <TodoList backgroundColor="green" title={'完了'} />
        </div>
    );
};

export default App;
