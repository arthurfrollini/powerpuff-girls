import { render, screen } from "@testing-library/react";
import { Header } from ".";

import renderer from "react-test-renderer";

const props = {
  isHome: false,
  imageSource:
    "https://upload.wikimedia.org/wikipedia/pt/0/08/The_Powerpuff_Girls_Logo.png",
  name: "Powerpuff Girls",
  summary:
    "As Meninas Superpoderosas é uma série de desenho animado criada e escrita por Craig McCracken. Sucesso em todo o mundo!",
};

describe("Header component", () => {
  it("renders correctly", () => {
    const { getByText, debug } = render(<Header {...props} />);

    const header = screen.getByTestId("header");

    expect(header).toBeTruthy();
    expect(getByText("Powerpuff Girls")).toBeInTheDocument();

    debug();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
