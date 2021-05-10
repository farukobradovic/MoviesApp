import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ShowPage from "./pages/ShowPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <Fragment>
      <Route
        render={() => (
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/movies/:id/:name' component={MoviePage} />
            <Route exact path='/shows/:id/:name' component={ShowPage} />
            <Route exact path='/people/:id/:name' component={PersonPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        )}
      />
      <Footer />
    </Fragment>
  );
}

export default observer(App);
