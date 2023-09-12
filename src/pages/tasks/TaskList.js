import deleteIcon from "../../assets/images/delete.svg";
import editIcon from "../../assets/images/edit.svg";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="pt-5 ">
      {tasks.map((task) => {
        return (
          <div
            className="bg-[#9f9c9c62] rounded-md flex items-center py-4 my-3"
            key={task.id}
          >
            <input type="checkbox" className="m-2" />
            <span className="pl-3 text-lg">{task.taskName}</span>
            <button
              className="w-[30px] h-[30px] pl-3"
              onClick={() => {
                onDelete(task.id);
              }}
            >
              <img src={deleteIcon} alt="Icon" />
            </button>
            <button
              className="w-[30px] h-[30px] pl-3"
              onClick={() => {
                onUpdate();
              }}
            >
              <img src={editIcon} alt="Icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
