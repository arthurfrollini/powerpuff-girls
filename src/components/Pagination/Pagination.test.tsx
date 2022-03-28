import { render, screen } from "@testing-library/react";
import { Pagination } from ".";

import renderer from "react-test-renderer";

describe("Pagination component", () => {
  it("renders correctly", () => {
    render(<Pagination />);

    expect(screen.getByTestId("pagination")).toBeTruthy();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Pagination />);

    expect(tree).toMatchSnapshot();
  });
});
