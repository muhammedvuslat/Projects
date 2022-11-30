import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ tutor, getTutorials }) => {
  const [editItem, setEditItem] = useState("");
  const deleteTutorial = async (id) => {
    const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="contaniner mt-4 ">
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">İd</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-success"
                    onClick={() => setEditItem(item)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger"
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editItem={editItem} getTutorials={getTutorials} />
    </div>
  );
};

export default TutorialList;
