import axios from "axios";
import { useState } from "react";
import "./styling.css";

const AddTaskSection = () => {
    const [taskName, setTaskName] = useState('');
    const [id, setId] = useState(0);
    const url = 'http://localhost:5000/add';

    const handleClick = async () => {
        if (taskName === '') {
            window.alert("Task name can't be empty");
            return;
        }

        try {
            const resp = await axios.post(url, { "title": taskName, "id": id });
            if (resp) {
                alert("Data added successfully");
            } else {
                alert("Could not add data. Please try again later.");
            }
            window.location.reload();
        } catch (err) {
            console.log(err);
            alert("Error while posting");
        }
        
        
    };

    return (
        <div className="addTask">
            <div className="titleInp">
                <p>Add title</p>
                <input placeholder="Title" value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
            </div>
            <div className="taskId">
                <p>Add id</p>
                <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}></input>
            </div>
            <button onClick={handleClick}>Add Task</button>
        </div>
    );
};

export default AddTaskSection;
