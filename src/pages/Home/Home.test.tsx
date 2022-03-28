import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PaginationProvider } from "../../hooks/usePagination";

import nock from "nock";
import axios from "axios";

import renderer from "react-test-renderer";
import { Home } from ".";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("Home component", () => {
  it("renders correctly", () => {
    render(
      <Router>
        <PaginationProvider>
          <Home />
        </PaginationProvider>
      </Router>
    );

    expect(screen.getByText("Lista de episódios:")).toBeInTheDocument();
  });

  it("fetch data correctly", async () => {
    const scope = nock("http://api.tvmaze.com")
      .get("/search/shows?q=powerpuff")
      .reply(200, "test response");

    await axios.get("http://api.tvmaze.com/search/shows?q=powerpuff");

    scope.done();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(
      <Router>
        <PaginationProvider>
          <Home />
        </PaginationProvider>
      </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
