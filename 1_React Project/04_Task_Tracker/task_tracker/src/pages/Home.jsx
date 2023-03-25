import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AddTask from "../components/addTask/AddTask";
import ListTask from "../components/listTask/ListTask";

const Home = () => {
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const url = "https://641df6700596099ce1586964.mockapi.io/task_tracker";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };
  const getTask = async () => {
    const { data } = await axios(url);
    console.log(data);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        onClick={() => {
          toggle();
        }}
        variant="danger"
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}

      <ListTask task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
