import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";

describe("NotFound", () => {
  it("renders NotFound Component", () => {
    render(<NotFound />);
  });
  it("renders Create New Contact title", () => {
    render(<NotFound />);
    const notFoundText = screen.getByText("Not found", { exact: false });
    expect(notFoundText).toBeInTheDocument();
  });
});
