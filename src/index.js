import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/redux-store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App store={store} dispatch={store.dispatch.bind(store)} />
  </Provider>
);
