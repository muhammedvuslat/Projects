import { Button, Form } from "react-bootstrap";

const AddTask = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter Task" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
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
