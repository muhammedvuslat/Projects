import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ editItem, getTutorials }) => {
  const { id, title: newTitle, description: newDescription } = editItem;
  // ! üst satırda yapılan destructuring işleminde title iptaş olup newTitle olarak değiştirilir diğer description objesi de aynı şekilde
  const [title, setTitle] = useState(newTitle);
  const [description, setDescription] = useState(newDescription);
  //! use effect işlemi olmadan mount yapılmadığı için üst satırda useState içerisine veri aktarılmasını render sonrasında useEffect çalışıracak callBack yapar
  //! Detaylı bilgi https://reactjs.org/docs/hooks-reference.html

  useEffect(() => {
    setTitle(newTitle);
    setDescription(newDescription);
  }, [newTitle, newDescription]);

  const editTutorial = async (id, tutor) => {
    const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";
    try {
      await axios.put(`${url}/${id}`, tutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTutorial(id, { title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Tutorial
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Please Enter Your Title"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Please Enter Your Description"
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Save Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditTutorial;
