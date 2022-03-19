import { render, screen } from "@testing-library/react";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("renders learn react link", () => {
  const history = createMemoryHistory();
  render(
    <Router location={""} navigator={history} >
      <App />
    </Router>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
