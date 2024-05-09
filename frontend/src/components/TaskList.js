import axios from "axios";
import { useEffect, useState } from "react";

const TaskList = () => {
    const url = "http://localhost:5000/all";
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);

    return (
        <div className="tasks">
            {
                tasks.map((task) => (<div className="task" key={task.id}>{task.title}</div>))
            }
        </div>
    );
};

export default TaskList;
