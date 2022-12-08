import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/redux-store";
import { CookiesProvider } from "react-cookie";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </Provider>
  </CookiesProvider>
);
