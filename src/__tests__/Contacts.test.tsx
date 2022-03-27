import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import Contacts from "../pages/Contacts";
import { setupServer } from "msw/node";
import { DefaultRequestBody, rest } from "msw";
import { url } from "../axios/url";
import ContactsProvider from "../store/ContactsProvider";
import { mockContactsFirebase } from "../helpers/__mocks__/dummy_data";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const server = setupServer(
  rest.get<DefaultRequestBody, any>(`${url}/contacts.json`, (req, res, ctx) => {
    return res(ctx.delay(100), ctx.json(mockContactsFirebase));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("Contacts with Successfully loaded contacts", () => {
  beforeEach(async () => {
    render(
      <ContactsProvider>
        <Contacts />
      </ContactsProvider>
    );
    await waitForElementToBeRemoved(() =>
      screen.getByText("Loading...", { exact: false })
    );
  });
  it("renders contacts name", async () => {
    const list = await screen.findByText("Matya Szobatiszta", { exact: false });
    expect(list).toBeInTheDocument();
  });
  it("renders email", async () => {
    const name = await screen.findByText("matya.szobatiszta@gmail.com", {
      exact: false,
    });
    expect(name).toBeInTheDocument();
  });
});

describe("Contacts without contacts data", () => {
  //test without linking the components to the Provider
  beforeEach(async () => {
    render(<Contacts />);
    await waitForElementToBeRemoved(() =>
      screen.getByText("Loading...", { exact: false })
    );
  });
  it("list items are not rendered when there are no contacts", async () => {
    render(<Contacts />);
    const list = await screen.findByRole("list");
    const { queryAllByRole } = within(list);
    const items = queryAllByRole("listitem");
    expect(items.length).toBe(0);
  });
  it("renders No availabe contacts text when there are no contacts", async () => {
    render(<Contacts />);
    await waitFor(() =>
      expect(screen.getByText("No available contacts")).toBeInTheDocument()
    );
  });
});
