import React, { useState } from "react";
import "./TaskDetail.css";
import "draft-js/dist/Draft.css";
import Sub_Tasks from "./Sub_Tasks";

export default function TaskDetail(props) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  if (!props.show) {
    return null;
  }

  const onClickHandler = (e) => {
    setComments((comments) => [...comments, comment]);
    setComment((e.target.value = ""));
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

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
            <div className="files">
              {props.item.files &&
                props.item.files.map((i, index) => (
                  <a className="file" href={i.name}>
                    {i.name}
                  </a>
                ))}
            </div>
            <Sub_Tasks sub={props.item.sub} />
          </div>
          <div className="block_comments">
            <span className="task_descr">Coments:</span>
            <div className="cur_comments">
              {comments.map((com) => (
                <li className="com">{com}</li>
              ))}
            </div>
            <div className="comments">
              <textarea value={comment} onChange={onChangeHandler} />
              <button onClick={onClickHandler} className="send_coments">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
