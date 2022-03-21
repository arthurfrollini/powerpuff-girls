import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { EpisodeDetails } from "../pages/EpisodeDetails";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/episode/:id" component={EpisodeDetails} />
      </Switch>
    </Router>
  );
}
