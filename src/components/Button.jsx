import React from 'react';

const Button = ({ color, text, onClick }) => {
    return (
        <button style={{ color: color }} onClick={onClick} className="button">
            {text}
        </button>
    );
};

export default Button;
