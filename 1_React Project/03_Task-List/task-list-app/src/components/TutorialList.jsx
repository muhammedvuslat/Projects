import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

const TutorialList = ({ tutor, getTutorials }) => {
  const [editItem, setEditItem] = useState("");
  console.log(tutor);

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
                    data-bs-target="#edit-modal"
                    data-bs-toggle="modal"
                    className="me-2 text-success"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
