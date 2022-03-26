import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactEdit from "../components/contacts/details/ContactEdit";

describe("ContactEdit", () => {
  const props = {
    onCancel: () => null,
    onSave: () => null,
    onDelete: () => null,
    contact: {
      id: "1",
      firstName: "Matya",
      lastName: "Szobatiszta",
      phoneNumber: "061233344",
      email: "matya.szobatiszta@gmail.com",
      age: 10,
      picture:
        "https://vgl.ucdavis.edu/sites/g/files/dgvnsk8836/files/inline-images/Havanese-Health-Panel-600px.jpg",
      linkToWebsite: "sddasdasdsaddasdasdasdasdasd",
      tags: ["ez", "az"],
    },
  };
  it("renders ContactEdit Component", () => {
    render(<ContactEdit {...props} />);
  });
  it("renders picture", () => {
    render(<ContactEdit {...props} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
  it("renders Save button", () => {
    render(<ContactEdit {...props} />);
    const button = screen.getByText("Save");
    expect(button).toBeInTheDocument();
  });
  it("renders Cancel button", () => {
    render(<ContactEdit {...props} />);
    const button = screen.getByText("Cancel");
    expect(button).toBeInTheDocument();
  });
  it("renders Delete button", () => {
    render(<ContactEdit {...props} />);
    const button = screen.getByText("Delete");
    expect(button).toBeInTheDocument();
  });
  it("renders First Name field lable", () => {
    render(<ContactEdit {...props} />);
    const label = screen.getByText("First Name");
    expect(label).toBeInTheDocument();
  });
  it("renders First Name field input", () => {
    render(<ContactEdit {...props} />);
    const inputValue = screen.getByDisplayValue(props.contact.firstName);
    expect(inputValue).toBeInTheDocument();
  });
  it("change the value of First Name field", () => {
    render(<ContactEdit {...props} />);
    const firstName: HTMLInputElement = screen.getByDisplayValue(
      props.contact.firstName
    );
    fireEvent.change(firstName, { target: { value: "test" } });
    expect(firstName.value).toBe("test");
  });
});
