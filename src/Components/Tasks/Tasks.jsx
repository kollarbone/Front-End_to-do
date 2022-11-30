import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import "./Tasks.css";
import _ from "lodash";
import GoBack from "./GoBack";
import TaskDetail from "./TaskDetail/TaskDetail";
import SearchBar from "./SearchBar";

function Tasks(props) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  let path = useLocation().pathname.slice(
    useLocation().pathname.lastIndexOf("//")
  );
  let tasks = props.store[path - 1].tasks;
  const [state, setState] = useState({
    Queue: {
      title: "Queue",
      color: "#f7e1f5",
      items: []
    },
    Development: {
      title: "Development",
      color: "#e1dbf5",
      items: []
    },
    Done: {
      title: "Done",
      color: "#e8f1f0",
      items: []
    }
  });
  _.map(state, (data, key) => {
    if (data.items.length === 0) {
      tasks.map((t, index) => {
        if (key === t.status) {
          data.items = [...new Set([...data.items, t])];
          data.items = data.items.filter((t) => t.id !== 0);
          return data.items;
        }
      });
    }
  });

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
          <SearchBar tasks={tasks} />
        </div>
        <div>
          <MdOutlineAdd className="add_icon" />
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
                                  <RiDeleteBinLine className="close_icon" />
                                  <span className="task_info">
                                    <span className="task_name">
                                      {item.taskNumber}.{item.taskName}
                                    </span>
                                    <span className="task_descr">
                                      {item.taskDescr}
                                    </span>
                                    <span className="task_duration">
                                      ({item.start}-{item.end})
                                    </span>
                                  </span>
                                </div>
                                <TaskDetail
                                  item={modalData}
                                  show={show}
                                  onClose={() => setShow(false)}
                                  id={path}
                                />
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
