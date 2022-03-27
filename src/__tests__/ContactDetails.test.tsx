import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import { DefaultRequestBody, rest } from "msw";
import { url } from "../axios/url";
import ContactDetails from "../pages/ContactDetails";
import ContactsProvider from "../store/ContactsProvider";
import {mockContactFirebase} from "../helpers/__mocks__/dummy_data"

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => ({
    id: "1",
  }),
}));

const server = setupServer(
  rest.get<DefaultRequestBody, any>(
    `${url}/contacts/1.json`,
    (req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json(mockContactFirebase)
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("ContactDetails", () => {
  beforeEach(async () => {
    render(
      <ContactsProvider>
        <ContactDetails />
      </ContactsProvider>
    );
    await waitForElementToBeRemoved(() =>
      screen.getByText("Loading...", { exact: false })
    );
  });

  it("renders contacts name", () => {
    const name = screen.getByText("Matya Szobatiszta", { exact: false });
    expect(name).toBeInTheDocument();
  });
  it("renders Open button", () => {
    const button = screen.getByText("Open");
    expect(button).toBeInTheDocument();
  });
  it("renders image", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
