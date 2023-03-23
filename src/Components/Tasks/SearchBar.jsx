import React, { useState } from "react";

export default function SearchBar(props) {
  const tasks = props.tasks;
  const [value, setValue] = useState("");
  const filteredTasks = tasks.filter((task) => {
    task = task.taskNumber + task.taskName;
    return task.toLowerCase().includes(value.toLowerCase());
  });

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
                      <div className="search_character_name">
                        {task.taskNumber}.{task.taskName}
                      </div>
                    </li>
                  </>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
