import axios from "axios";
import { FaEdit } from "react-icons/fa";

const TutorailList = () => {
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
          {[0, 1, 2, 4]?.map((item) => {
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
                </td>
                <td>{description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorailList;
