import React, { useState } from "react";
import "./TaskDetail.css";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function TaskDetail(props) {
  if (!props.show) {
    return null;
  }
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const work = new Date().getDate() - new Date(props.item.start).getDate();
  return (
    <div className="task_detail" onClick={props.onClose}>
      <div
        className="banner_modal"
        style={{ backgroundColor: "#e1e6f9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="task_name">
          {props.item.taskNumber}.{props.item.taskName}
        </span>
        <div className="info_block">
          <div className="full_task_info">
            <span className="task_descr">
              Description: {props.item.taskDescr}
            </span>
            <span className="task_duration">
              Creation data: {props.item.start}
            </span>
            <span className="task_duration">In work: {work} day(s)</span>
            <span className="task_duration">Ending data: {props.item.end}</span>
            <span className="task_descr">Priority: {props.item.priority}</span>
            <span className="task_descr">Status: {props.item.status}</span>
            <span className="task_descr">Files: </span>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "10px",
                width: "100%"
              }}
            >
              <span className="task_descr">Sub tasks: </span>
              <div className="sub_tasks">
                {props.item.sub.map((i, index) => (
                  <li>{i.name}</li>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              width: "30%",
              height: "100%"
            }}
          >
            <span className="task_descr">Coments:</span>
            <Editor editorState={editorState} onChange={setEditorState} />
          </div>
        </div>
      </div>
    </div>
  );
}
