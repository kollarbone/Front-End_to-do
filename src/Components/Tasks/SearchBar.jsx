import React, { useState } from "react";
import TaskDetail from "./TaskDetail/TaskDetail";

export default function SearchBar(props) {
  const tasks = props.tasks;
  const [value, setValue] = useState("");
  const filteredTasks = tasks.filter((task) => {
    task = task.taskNumber + task.taskName;
    return task.toLowerCase().includes(value.toLowerCase());
  });
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="LiveSearch">
      <div className="search_form">
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
                        id={props.path}
                      />
                    )}
                  </>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
