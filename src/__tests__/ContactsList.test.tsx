import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, within } from "@testing-library/react";
import ContactsList from "../components/contacts/list/ContactsList";
import { mockContactsFull } from "../helpers/__mocks__/dummy_data";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("ContactList", () => {
  it("renders ContactsList Component", () => {
    render(<ContactsList contacts={mockContactsFull} />);
  });
  it("renders list and listitems if there are contacts", () => {
    render(<ContactsList contacts={mockContactsFull} />);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });
  it("renders No available contacts text if there are no contacts", () => {
    render(<ContactsList contacts={[]} />);
    const text = screen.getByText("No available contacts", { exact: false });
    expect(text).toBeInTheDocument();
  });
  it("renders Create new contact button", () => {
    render(<ContactsList contacts={[]} />);
    const button = screen.getByText("Create new contact", { exact: false });
    expect(button).toBeInTheDocument();
  });
});
