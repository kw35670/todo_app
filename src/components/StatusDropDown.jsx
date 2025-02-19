import React from 'react';

const StatusDropDown = ({
    index,
    todo,
    notStarted,
    inProgress,
    completed,
    setNotStarted,
    setInProgress,
    setCompleted,
}) => {
    // ✅ 現在のステータスを判定
    let currentStatus = 'notStarted'; // デフォルトは "未着手"
    if (inProgress.includes(todo)) {
        currentStatus = 'inProgress';
    } else if (completed.includes(todo)) {
        currentStatus = 'completed';
    }

    const handleChange = (e) => {
        const newStatus = e.target.value;

        // ✅ 選択されたステータスに応じてタスクを移動
        if (newStatus === 'notStarted') {
            setNotStarted((prev) => [...prev, todo]);
            setInProgress((prev) => prev.filter((_, i) => i !== index));
            setCompleted((prev) => prev.filter((_, i) => i !== index));
        } else if (newStatus === 'inProgress') {
            setInProgress((prev) => [...prev, todo]);
            setNotStarted((prev) => prev.filter((_, i) => i !== index));
            setCompleted((prev) => prev.filter((_, i) => i !== index));
        } else if (newStatus === 'completed') {
            setCompleted((prev) => [...prev, todo]);
            setNotStarted((prev) => prev.filter((_, i) => i !== index));
            setInProgress((prev) => prev.filter((_, i) => i !== index));
        }
    };

    return (
        <select value={currentStatus} onChange={handleChange}>
            <option value="notStarted">未着手</option>
            <option value="inProgress">着手中</option>
            <option value="completed">完了</option>
        </select>
    );
};

export default StatusDropDown;
