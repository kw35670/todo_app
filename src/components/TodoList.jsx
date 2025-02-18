import React from 'react';
import { useState } from 'react';

import Button from './Button';
import StatusDropDown from './StatusDropDown';

const TodoList = ({ backgroundColor, title, todos }) => {
    return (
        <div className="todo-lists">
            <div
                className="todo-block"
                style={{ backgroundColor: backgroundColor }}
            >
                <h2 className="todo-list-title">{title}</h2>
                <ul className="todo-list-group">
                    {todos.map((todo, index) => (
                        <li key={index} className="todo-list">
                            {todo}
                            <StatusDropDown />
                            <Button backgroundColor="pink" text="削除" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
