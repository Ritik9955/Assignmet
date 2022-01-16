import { BrowserRouter as Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import Home from "./components/Home";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
          <Home />
      </Route>
    </Switch>
  );
}
