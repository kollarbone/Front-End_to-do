import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdOutlineAdd } from "react-icons/md";
import "./Tasks.css";
import _ from "lodash";
import GoBack from "./GoBack";
import SearchBar from "./SearchBar";
import { v4 } from "uuid";

function Tasks(props) {
  let DATA = JSON.parse(localStorage.getItem(props.path)) || props.task_data;
  if (JSON.parse(localStorage.getItem(props.path))) {
    let state_data = JSON.parse(localStorage.getItem(props.path));
    if (JSON.parse(localStorage.getItem("data"))) {
      let save_data = JSON.parse(localStorage.getItem("data"));
      let test = state_data[save_data.status].items.map((i) => {
        if (i.id === save_data.id) {
          i = save_data;
        }

        return i;
      });
      state_data[save_data.status].items = test;
      DATA = state_data;
    } else {
      DATA = state_data;
    }
  } else {
    DATA = props.task_data;
  }
  const [newTask, setNewTask] = useState(false);
  const [state, setState] = useState(DATA);
  const [NewTaskData, setNewTaskData] = useState({
    id: v4(),
    taskName: "",
    taskDescr: "",
    start: "",
    status: "Queue",
    taskNumber: ""
  });
  const onChangeHandlerNewTask = (name) => (e) => {
    let newArr = { ...NewTaskData, [name]: e.target.value };
    setNewTaskData(newArr);
  };
  const onClickHandlerAddNewTask = () => {
    setState((prev) => {
      return {
        ...prev,
        Queue: {
          title: "Queue",
          color: "#f7e1f5",
          items: [...prev.Queue.items, NewTaskData]
        }
      };
    });
    setNewTask(false);
    localStorage.setItem(props.path, JSON.stringify(state));
  };
  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const itemCopy = { ...state[source.droppableId].items[source.index] };
    setState((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      itemCopy.status = destination.droppableId;
      return prev;
    });
    localStorage.setItem(props.path, JSON.stringify(state));
  };

  return (
    <div className="tasks">
      <div className="header">
        <GoBack className="add_icon" />
        <div className="task_header">TASKS</div>
        <div>
          <SearchBar tasks={props.tasks} path={props.path} />
        </div>
        <div>
          <MdOutlineAdd
            className="add_icon"
            onClick={() => {
              setNewTask(true);
            }}
          />
          {newTask && (
            <div className="task_detail" onClick={() => setNewTask(false)}>
              <div
                className="banner_modal"
                style={{ backgroundColor: "#e1e6f9" }}
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  className="task_name"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span className="task_name"> Name:</span>
                  <input
                    style={{ width: "50%" }}
                    className="input"
                    value={NewTaskData.taskName}
                    name="taskName"
                    onChange={onChangeHandlerNewTask("taskName")}
                  />
                </span>
                <span
                  className="task_name"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span className="task_name">Number:</span>
                  <input
                    style={{ width: "50%" }}
                    className="input"
                    value={NewTaskData.taskNumber}
                    name="taskNumber"
                    onChange={onChangeHandlerNewTask("taskNumber")}
                  />
                </span>
                <span
                  className="task_name"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span className="task_name">Description:</span>
                  <input
                    style={{ width: "50%" }}
                    className="input"
                    value={NewTaskData.taskDescr}
                    name="taskDescr"
                    onChange={onChangeHandlerNewTask("taskDescr")}
                  />
                </span>
                <span
                  className="task_name"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span className="task_name">Start:</span>
                  <input
                    style={{ width: "50%" }}
                    className="input"
                    value={NewTaskData.start}
                    name="start"
                    onChange={onChangeHandlerNewTask("start")}
                  />
                </span>

                <span
                  className="task_name"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span className="task_name">Status:</span>
                  <span className="task_name">{NewTaskData.status}</span>
                </span>
                <span
                  className="task_name"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <button
                    style={{
                      backgroundColor: "#fff",
                      margin: "10px"
                    }}
                    className="send_coments"
                    onClick={onClickHandlerAddNewTask}
                  >
                    ADD
                  </button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="colums">
          {_.map(state, (data, key) => {
            return (
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="column"
                      style={{ backgroundColor: data.color }}
                    >
                      <span className="column_name">{data.title}</span>
                      {data.items &&
                        data.items.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided) => (
                              <>
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="task"
                                >
                                  <span className="task_info">
                                    <span className="task_name">
                                      {item.taskNumber}.{item.taskName}
                                    </span>
                                    <span className="task_descr">
                                      {item.taskDescr}
                                    </span>
                                    <span className="task_duration">
                                      ({item.start})
                                    </span>
                                  </span>
                                </div>
                              </>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Tasks;
