import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import "./Tasks.css";
import _ from "lodash";

function Tasks(props) {
  let path = useLocation().pathname.slice(
    useLocation().pathname.lastIndexOf("//")
  );
  let tasks = props.store[path - 1].tasks;
  const [state, setState] = useState({
    Queue: {
      title: "Queue",
      color: "#f7e1f5",
      items: [tasks[0], tasks[1]]
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
      return prev;
    });
  };
  return (
    <div className="tasks">
      <div className="header">
        <span>TASKS</span>
        <MdOutlineAdd className="add_icon" />
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
                            draggableId={item.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="task"
                              >
                                <RiDeleteBinLine className="close_icon" />
                                <span className="project_name">
                                  {item.taskName}
                                </span>
                              </div>
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
