import React, { useState } from "react";
import TaskDetail from "./TaskDetail/TaskDetail";
import { useLocation } from "react-router-dom";

export default function SearchBar(props) {
  const tasks = props.tasks;
  const [value, setValue] = useState("");
  const filteredTasks = tasks.filter((task) => {
    task = task.taskNumber + task.taskName;
    return task.toLowerCase().includes(value.toLowerCase());
  });
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  let path = useLocation().pathname.slice(
    useLocation().pathname.lastIndexOf("//")
  );
  return (
    <div className="LiveSearch">
      <form className="search_form">
        <input
          className="input"
          type="text"
          placeholder="Search.."
          onChange={(event) => setValue(event.target.value)}
        />
        <ul className="auto_complete">
          {value
            ? filteredTasks.map((task) => {
                return (
                  <>
                    <li className="auto_complete_item">
                      <div
                        className="search_character_name"
                        onClick={() => {
                          setShow(true);
                          setModalData(task);
                        }}
                      >
                        {task.taskNumber}.{task.taskName}
                      </div>
                    </li>
                    {show && (
                      <TaskDetail
                        item={modalData}
                        onClose={() => setShow(false)}
                        id={path}
                      />
                    )}
                  </>
                );
              })
            : null}
        </ul>
      </form>
    </div>
  );
}
