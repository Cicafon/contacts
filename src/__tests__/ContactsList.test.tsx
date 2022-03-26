import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, within } from "@testing-library/react";
import ContactsList from "../components/contacts/list/ContactsList";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const contacts = [
  {
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
  {
    id: "2",
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
];

describe("ContactList", () => {

  it("renders ContactsList Component", () => {
    render(<ContactsList contacts={contacts} />);
  });
  it("renders list and listitems if there are contacts", () => {
    render(<ContactsList contacts={contacts} />);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });
  it("renders No available contacts text if there are no contacts", () => {
    render(<ContactsList contacts={[]} />);
    const text = screen.getByText("No available contacts", { exact: false });
    expect(text).toBeInTheDocument()
  });
});
