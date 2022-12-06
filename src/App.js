import Propjects from "./Components/Projects";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksClass from "./Components/Tasks/TaskClass";

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Propjects store={props.store.getState().main.projects} />}
          />
          <Route
            path="/tasks/:project_id"
            element={
              <TasksClass store={props.store.getState().main.projects} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
