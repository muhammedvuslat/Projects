import { AiOutlineDelete } from "react-icons/ai";
const ListTask = ({ task }) => {
  console.log(task);
  return (
    <div>
      {task.map((taskMap) => {
        const { id, task, date } = taskMap;
        return (
          <div
            key={id}
            className="mt-2 d-flex rounded-2 p-2 justify-content-between"
            style={{
              background: "rgba(22, 116, 209, 0.15)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <AiOutlineDelete
                style={{
                  color: "#e0310d",
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "1.5rem",
                  boxShadow: "2px 2px 2px #ECAB9E",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ListTask;
