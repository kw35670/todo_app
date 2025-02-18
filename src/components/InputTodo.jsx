import react from 'react';

const InputTodo = ({ text, onChangeInput, onClickAdd }) => {
    return (
        <div className="input-container">
            <input
                className="todo-input"
                type="text"
                name="todo-input"
                id="todo-input"
                value={text}
                onChange={(e) => onChangeInput(e)}
            />
            <button className="input-button" type="button" onClick={onClickAdd}>
                追加
            </button>
        </div>
    );
};

export default InputTodo;
