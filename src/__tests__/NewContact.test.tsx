import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NewContact from "../pages/NewContact";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("NewContact", () => {
  it("renders NewContact Component", () => {
    render(<NewContact />);
  });
  it("renders Create New Contact title", () => {
    render(<NewContact />);
    const title = screen.getByText("New Contact", { exact: false });
    expect(title).toBeInTheDocument();
  });
  it("renders Save button", () => {
    render(<NewContact />);
    const button = screen.getByText("Save");
    expect(button).toBeInTheDocument();
  });
  it("renders Cancel button", () => {
    render(<NewContact />);
    const button = screen.getByText("Cancel");
    expect(button).toBeInTheDocument();
  });
  it("not to render Delete button", () => {
    render(<NewContact />);
    const button = screen.queryByText("Delete");
    expect(button).not.toBeInTheDocument();
  });
});
