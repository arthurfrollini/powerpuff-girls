import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PaginationProvider } from "../../hooks/usePagination";

import { Episodes } from ".";

import renderer from "react-test-renderer";

const episodes = [
  {
    id: 1,
    name: "Episode 1",
    summary: "Summary 1",
    image: {
      medium: "Image 1",
    },
  },
  {
    id: 2,
    name: "Episode 2",
    summary: "Summary 2",
    image: {
      medium: "Image 2",
    },
  },
  {
    id: 3,
    name: "Episode 3",
    summary: "Summary 3",
    image: {
      medium: "Image 3",
    },
  },
];

describe("Episodes component", () => {
  it("should render a list of episode", () => {
    render(
      <Router>
        <PaginationProvider>
          <Episodes episodes={episodes} />
        </PaginationProvider>
      </Router>
    );

    expect(screen.getByText("Episode 2")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Router>
          <PaginationProvider>
            <Episodes episodes={episodes} />
          </PaginationProvider>
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
