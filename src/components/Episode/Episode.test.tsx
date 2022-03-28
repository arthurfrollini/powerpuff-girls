import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Episode } from ".";

import renderer from "react-test-renderer";

describe("Episode component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Router>
        <Episode name="episode" id="1" episodeNumber={1} />
      </Router>
    );

    expect(getByText("episode")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Router>
          <Episode name="episode" id="1" episodeNumber={1} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
