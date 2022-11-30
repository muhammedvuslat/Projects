import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
    console.log(newTutor);
    addTutorial(newTutor);
    setTitle("");
    setDescription("");
  };

  const refresh = (e) => {
    getTutorials();
  };
  const addTutorial = async (newTutor) => {
    const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";

    try {
      await axios.post(url, newTutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-warning ">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Please Enter Your Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="desc"
            className="form-control"
            placeholder="Please Enter Your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-outline-success">Submit</button>
      </form>
      <button className="btn btn-outline-warning mt-2" onClick={refresh}>
        Refresh
      </button>
    </div>
  );
};

export default AddTutorial;
