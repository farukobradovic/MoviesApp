import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ShowPage from "./pages/ShowPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Fragment>
      <Route
        render={() => (
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/movies/:id' component={MoviePage} />
            <Route exact path='/shows/:id' component={ShowPage} />

            <Route path='*' component={NotFound} />
          </Switch>
        )}
      />
    </Fragment>
  );
}

export default observer(App);
