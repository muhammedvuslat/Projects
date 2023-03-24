import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import ListTask from "../components/listTask/ListTask";

const Home = () => {
  const url = "https://641df6700596099ce1586964.mockapi.io/task_tracker";
  const [task, setTask] = useState([]);
  const getTask = async () => {
    const { data } = await axios(url);
    console.log(data);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      <AddTask />
      <ListTask task={task} />
    </div>
  );
};

export default Home;
