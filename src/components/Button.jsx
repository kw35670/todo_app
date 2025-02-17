import React from 'react';

const Button = ({ backgroundColor, text, onClick }) => {
    return (
        <button
            style={{ backgroundColor : backgroundColor }}
            onClick={onClick}
            className="button"
        >
            {text}
        </button>
    );
};

export default Button;
