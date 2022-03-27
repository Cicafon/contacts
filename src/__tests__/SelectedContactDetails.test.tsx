import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectedContactDetails from "../components/contacts/details/SelectedContactDetails";
import { mockContactFull } from "../helpers/__mocks__/dummy_data";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SelectedContactDetails", () => {
  it("renders SelectedContactDetails Component", () => {
    render(<SelectedContactDetails contact={mockContactFull} />);
  });
  it("View mode in default and renders Open button", () => {
    render(<SelectedContactDetails contact={mockContactFull} />);
    const openButton = screen.getByText("Open");
    expect(openButton).toBeInTheDocument();
  });
  it("Change to edit mode and rendering the Edit Contact title", () => {
    render(<SelectedContactDetails contact={mockContactFull} />);
    const openButton = screen.getByText("Open");
    userEvent.click(openButton);
    const editTitle = screen.getByText("Edit Contact", { exact: false });
    expect(editTitle).toBeInTheDocument();
  });
  it("Change to edit mode then click to Cancel and being in View mode again", () => {
    render(<SelectedContactDetails contact={mockContactFull} />);
    const openButton = screen.getByText("Open");
    userEvent.click(openButton);
    const cancelButton = screen.getByText("Cancel");
    userEvent.click(cancelButton);
    const editTitle = screen.queryByText("Edit Contact", { exact: false });
    expect(editTitle).not.toBeInTheDocument();
  });
  it("Change to edit mode and change the name of the contact", () => {
    render(<SelectedContactDetails contact={mockContactFull} />);
    const openButton = screen.getByText("Open");
    userEvent.click(openButton);
    const firstName: HTMLInputElement = screen.getByDisplayValue(
      mockContactFull.firstName
    );
    fireEvent.change(firstName, { target: { value: "Test this scenario" } });
    expect(firstName.value).toBe("Test this scenario");
  });
});
