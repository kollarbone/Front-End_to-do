import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdOutlineAdd } from "react-icons/md";
import "./Tasks.css";
import _ from "lodash";
import GoBack from "./GoBack";
import TaskDetail from "./TaskDetail/TaskDetail";
import SearchBar from "./SearchBar";
import { v4 } from "uuid";

function Tasks(props) {
  let DATA = {};
  if (JSON.parse(localStorage.getItem("state"))) {
    let state_data = JSON.parse(localStorage.getItem("state"));
    if (JSON.parse(localStorage.getItem("data"))) {
      let save_data = JSON.parse(localStorage.getItem("data"));
      state_data[save_data.status].items.map((i) => {
        if (i.id === save_data.id) {
          i = save_data;
        }
        i = { ...state_data[save_data.status].items, i };

        // state_data[save_data.status].items += i;
        console.log(111, i);
      });
      console.log(123, state_data[save_data.status].items);
      DATA = state_data;
      console.log(save_data, state_data, DATA);
    } else {
      DATA = state_data;
    }
  } else {
    DATA = props.task_data;
  }
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [state, setState] = useState(DATA);
  const [NewTaskData, setNewTaskData] = useState({
    id: v4(),
    taskName: "",
    taskDescr: "",
    start: "",
    end: "",
    status: "Queue",
    taskNumber: "",
    files: [],
    coments: "",
    sub: []
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
    localStorage.setItem("state", JSON.stringify(state));
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
    localStorage.setItem("state", JSON.stringify(state));
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
                  <span className="task_name">Task name:</span>
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
                  <span className="task_name">Task number:</span>
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
                  <span className="task_name">Task description:</span>
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
                  <span className="task_name">Task start:</span>
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
                  <span className="task_name">Task end:</span>
                  <input
                    style={{ width: "50%" }}
                    className="input"
                    value={NewTaskData.end}
                    name="end"
                    onChange={onChangeHandlerNewTask("end")}
                  />
                </span>
                <span
                  className="task_name"
                  style={{ width: "20%", justifyContent: "space-between" }}
                >
                  <span className="task_name">Task status:</span>
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
                                  onClick={() => {
                                    setShow(true);
                                    setModalData(item);
                                  }}
                                >
                                  <span className="task_info">
                                    <span className="task_name">
                                      {item.taskNumber}.{item.taskName}
                                    </span>
                                    <span className="task_descr">
                                      {item.taskDescr}
                                    </span>
                                    <span className="task_duration">
                                      ({item.start}/{item.end})
                                    </span>
                                  </span>
                                </div>
                                {show && (
                                  <TaskDetail
                                    item={modalData}
                                    show={show}
                                    onClose={() => setShow(false)}
                                    id={props.path}
                                  />
                                )}
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
