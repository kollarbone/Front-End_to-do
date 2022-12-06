import Tasks from "./Tasks";
import React from "react";

class TasksClass extends React.Component {
  constructor(props) {
    super(props);
    this.name = window.location.href.split("/")[4];
    this.tasks = this.props.store[this.name - 1].tasks;
    this.state = [
      {
        title: "Queue",
        color: "#f7e1f5",
        items: []
      },
      {
        title: "Development",
        color: "#e1dbf5",
        items: []
      },
      {
        title: "Done",
        color: "#e8f1f0",
        items: []
      }
    ];
    this.state.map((data, key) => {
      this.tasks.map((t, index) => {
        if (data.title === t.status) {
          data.items = [...new Set([...data.items, t])];
          data.items = data.items.filter((t) => t.id !== 0);
        }
      });
    });
  }

  render() {
    return <Tasks task_data={this.state} tasks={this.tasks} path={this.name} />;
  }
}

export default TasksClass;
