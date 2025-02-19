import React from 'react';
import Button from './Button';
import StatusDropDown from './StatusDropDown';

const TodoList = ({
    backgroundColor,
    title,
    todos = [], // デフォルト値を設定して `undefined` エラー回避
    notStarted,
    inProgress,
    completed,
    setNotStarted,
    setInProgress,
    setCompleted,
}) => {
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
                            <StatusDropDown
                                index={index}
                                todo={todo}
                                notStarted={notStarted}
                                inProgress={inProgress}
                                completed={completed}
                                setNotStarted={setNotStarted}
                                setInProgress={setInProgress}
                                setCompleted={setCompleted}
                            />
                            <Button backgroundColor="pink" text="削除" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
