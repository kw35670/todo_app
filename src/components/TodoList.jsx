import React from 'react';
import Button from './Button';
import StatusDropDown from './StatusDropDown';

const TodoList = ({
    backgroundColor,
    title,
    todos = [],
    notStarted = [], // undefined を防ぐ
    inProgress = [], // undefined を防ぐ
    completed = [], // undefined を防ぐ
    setNotStarted,
    setInProgress,
    setCompleted,
}) => {
    // タスクを削除する関数
    const onClickDelete = (index) => {
        if (title === '未着手') {
            setNotStarted((prev) => prev.filter((_, i) => i !== index));
        } else if (title === '着手中') {
            setInProgress((prev) => prev.filter((_, i) => i !== index));
        } else if (title === '完了') {
            setCompleted((prev) => prev.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="todo-lists">
            <div className="todo-block" style={{ backgroundColor }}>
                <h2 className="todo-list-title">{title}</h2>
                <ul className="todo-list-group">
                    {todos.map((todo, index) => (
                        <li key={index} className="todo-list">
                            {todo}
                            <StatusDropDown
                                index={index}
                                todo={todo}
                                notStarted={notStarted} // 空配列がデフォルトで入る
                                inProgress={inProgress} // 空配列がデフォルトで入る
                                completed={completed} // 空配列がデフォルトで入る
                                setNotStarted={setNotStarted}
                                setInProgress={setInProgress}
                                setCompleted={setCompleted}
                            />
                            <Button
                                backgroundColor="pink"
                                text="削除"
                                onClick={() => onClickDelete(index)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
