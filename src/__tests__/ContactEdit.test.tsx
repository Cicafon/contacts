import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactEdit from "../components/contacts/details/ContactEdit";
import { mockContactFull } from "../helpers/__mocks__/dummy_data";

const props = {
  onCancel: () => null,
  onSave: () => null,
  onDelete: () => null,
  contact: mockContactFull,
};
describe("ContactEdit", () => {
  beforeEach(() => {
    render(<ContactEdit {...props} />);
  });
  it("renders picture", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
  it("renders Save button", () => {
    const button = screen.getByText("Save");
    expect(button).toBeInTheDocument();
  });
  it("renders Cancel button", () => {
    const button = screen.getByText("Cancel");
    expect(button).toBeInTheDocument();
  });
  it("renders Delete button", () => {
    const button = screen.getByText("Delete");
    expect(button).toBeInTheDocument();
  });
  it("renders First Name field lable", () => {
    const label = screen.getByText("First Name");
    expect(label).toBeInTheDocument();
  });
  it("renders First Name field input", () => {
    const inputValue = screen.getByDisplayValue(props.contact.firstName);
    expect(inputValue).toBeInTheDocument();
  });
  it("change the value of First Name field", () => {
    const firstName: HTMLInputElement = screen.getByDisplayValue(
      props.contact.firstName
    );
    fireEvent.change(firstName, { target: { value: "test" } });
    expect(firstName.value).toBe("test");
  });
});
