const EditTutorial = () => {
  return (
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
            <form>
              <div className="mb-2">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Please Enter Your Title"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  placeholder="Please Enter Your Description"
                  required
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-success">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditTutorial;
