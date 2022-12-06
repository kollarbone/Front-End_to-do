import React, { useState } from "react";
import "./TaskDetail.css";
import "draft-js/dist/Draft.css";
import { MdOutlineAdd } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

export default function TaskDetail(props) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [sub, setSub] = useState("");
  const [onCkick, setOnClick] = useState(false);
  const [subs, setSubs] = useState(props.item ? props.item.sub : "");

  const onClickHandlerSub = (e) => {
    setSubs((subs) => [...subs, { name: sub }]);
    setSub((e.target.value = ""));
  };
  const onChangeHandlerSub = (e) => {
    setSub(e.target.value);
  };
  const onClickHandler = (e) => {
    setComments((comments) => [...comments, comment]);
    setComment((e.target.value = ""));
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const startDate = new Date(props.item.start);
  const timeEnd = new Date();
  const diff = new Date(timeEnd.getTime() - startDate.getTime());

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
            <span className="task_duration">
              In work: {diff.getUTCMonth()} month(s) {diff.getUTCDate()} day(s)
            </span>
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
            <div className="sub_tasks_block">
              <span className="task_descr">Sub tasks: </span>
              <div className="sub_tasks">
                {subs && subs.map((i, index) => <li>{i.name}</li>)}
              </div>
              {onCkick === false && (
                <div onClick={() => setOnClick(true)}>
                  <MdOutlineAdd
                    className="add_icon"
                    style={{ float: "left" }}
                  />
                </div>
              )}
              {onCkick === true && (
                <div style={{ display: "flex" }}>
                  <VscClose
                    onClick={() => setOnClick(false)}
                    className="add_icon"
                    style={{ float: "left" }}
                  />
                  <div style={{ width: "100%" }}>
                    <textarea value={sub} onChange={onChangeHandlerSub} />
                    <button
                      onClick={onClickHandlerSub}
                      className="send_coments"
                    >
                      Post
                    </button>
                  </div>
                </div>
              )}
            </div>
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
