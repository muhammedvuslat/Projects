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
          {tutor?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <FaEdit />
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
