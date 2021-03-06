import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ContactListItem from "../components/contacts/list/ContactListItem";

const props = {
  picture:
    "https://vgl.ucdavis.edu/sites/g/files/dgvnsk8836/files/inline-images/Havanese-Health-Panel-600px.jpg",
  name: "Test Name",
  phoneNumber: "012334534",
  email: "test@tets.com",
  showDetails: () => null,
};
describe("ContactListItem", () => {
  beforeEach(() => {
    render(<ContactListItem {...props} />);
  });
  it("renders ContactListItem component", () => {});
  it("renders picture", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
  it("renders name text", () => {
    const text = screen.getByText(props.name, { exact: true });
    expect(text).toBeInTheDocument();
  });
  it("renders phone number text", () => {
    const text = screen.getByText(props.phoneNumber, { exact: true });
    expect(text).toBeInTheDocument();
  });
  it("renders email text", () => {
    const text = screen.getByText(props.email, { exact: true });
    expect(text).toBeInTheDocument();
  });
  it("renders View button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
