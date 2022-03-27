import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ContactView from "../components/contacts/details/ContactView";
import { mockContactFull } from "../helpers/__mocks__/dummy_data";

describe("ContactView", () => {
  const props = {
    onOpen: () => null,
    contact: mockContactFull,
  };
  it("renders ContactView Component", () => {
    render(<ContactView {...props} />);
  });
  it("renders picture", () => {
    render(<ContactView {...props} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
  it("renders h1 title by role", () => {
    render(<ContactView {...props} />);
    const image = screen.getByRole("heading");
    expect(image).toBeInTheDocument();
  });
  it("renders h1 title by text", () => {
    render(<ContactView {...props} />);
    const text = screen.getByText(`${props.contact.firstName} ${props.contact.lastName}`, { exact: false });
    expect(text).toBeInTheDocument();
  });
  it("renders email", () => {
    render(<ContactView {...props} />);
    const text = screen.getByText(props.contact.email);
    expect(text).toBeInTheDocument();
  });
  it("renders phone number", () => {
    render(<ContactView {...props} />);
    const text = screen.getByText(props.contact.phoneNumber);
    expect(text).toBeInTheDocument();
  });
  it("renders age", () => {
    render(<ContactView {...props} />);
    const text = screen.getByText(props.contact.age);
    expect(text).toBeInTheDocument();
  });
  it("renders link to website", () => {
    render(<ContactView {...props} />);
    const text = screen.getByText(props.contact.linkToWebsite);
    expect(text).toBeInTheDocument();
  });
  it("renders Open button by role", () => {
    render(<ContactView {...props} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("renders Open button by text", () => {
    render(<ContactView {...props} />);
    const text = screen.getByText("Open");
    expect(text).toBeInTheDocument();
  });
  it("renders tag by text", () => {
    render(<ContactView {...props} />);
    const text = screen.getByText(props.contact.tags[0]);
    expect(text).toBeInTheDocument();
  });
});
