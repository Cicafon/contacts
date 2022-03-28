import { render, screen } from "@testing-library/react";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("App", () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router location={""} navigator={history}>
        <App />
      </Router>
    );
  });
  test("renders Navigation logo text", () => {
    const logoText = screen.getByText("MyContacts");
    expect(logoText).toBeInTheDocument();
  });
});
