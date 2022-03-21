import ReactDOM from "react-dom";
import "./colors.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactsProvider from "./store/ContactsProvider";

ReactDOM.render(
  <ContactsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContactsProvider>,
  document.getElementById("root")
);
