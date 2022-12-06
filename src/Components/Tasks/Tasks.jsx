import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdOutlineAdd } from "react-icons/md";
import "./Tasks.css";
import _ from "lodash";
import GoBack from "./GoBack";
import TaskDetail from "./TaskDetail/TaskDetail";
import SearchBar from "./SearchBar";

function Tasks(props) {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [state, setState] = useState(props.task_data);
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
              ></div>
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
