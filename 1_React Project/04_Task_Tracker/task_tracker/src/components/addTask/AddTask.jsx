import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddTask = ({ getTask }) => {
  const url = "https://641df6700596099ce1586964.mockapi.io/task_tracker";

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addApiTask(newTask);
    setTask("");
    setDate("");
  };

  const addApiTask = async (newTask) => {
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <div className="text-center">
          <Button variant="outline-success w-50" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
