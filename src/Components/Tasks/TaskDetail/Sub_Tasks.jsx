import React, { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

function Sub_Tasks(props) {
  const sub_value = props.sub;
  const [sub, setSub] = useState("");
  const [onCkick, setOnClick] = useState(false);
  const [subs, setSubs] = useState(sub_value);
  const onClickHandlerSub = (e) => {
    setSubs((subs) => [...subs, { name: sub }]);
    setSub((e.target.value = ""));
  };
  const onChangeHandlerSub = (e) => {
    setSub(e.target.value);
  };
  return (
    <div className="sub_tasks_block">
      <span className="task_descr">Sub tasks: </span>
      <div className="sub_tasks">
        {subs.map((i, index) => (
          <li>{i.name}</li>
        ))}
      </div>
      {onCkick === false && (
        <div onClick={() => setOnClick(true)}>
          <MdOutlineAdd className="add_icon" style={{ float: "left" }} />
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
            <button onClick={onClickHandlerSub} className="send_coments">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sub_Tasks;
