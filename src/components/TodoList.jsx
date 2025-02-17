import React from 'react';
import Button from './Button';

const TodoList = ({ backgroundColor, title }) => {
    return (
        <div className="todo-lists">
            <div
                className="todo-block"
                style={{ backgroundColor: backgroundColor }}
            >
                <h2 className="todo-list-title">{title}</h2>
                <ul className="todo-list-group">
                    <li className="todo-list">Todo1<Button backgroundColor='pink' text={'着手'} /></li>
                    <li className="todo-list">Todo2</li>
                    <li className="todo-list">Todo3</li>
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
