import React from 'react';

const TodoList = ({ backgroundColor, title }) => {
    return (
        <div style={{ backgroundColor: backgroundColor }}>
            <h2>{title}</h2>
            <ul>
                <li>Todo1</li>
                <li>Todo2</li>
                <li>Todo3</li>
            </ul>
        </div>
    );
};

export default TodoList;
