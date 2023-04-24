import React from 'react'

export default function ToDoList({ taskList }) {
    return (
        <div className="row mt-3">
            <div className="col-6 offset-3">
                <ol className="text-center">
                    {taskList.map(task => <li key={task}>{task}</li>)}
                </ol>
            </div>
        </div>
    )
}
