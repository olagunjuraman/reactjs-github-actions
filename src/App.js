import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/dashboard" component={DashPage} />
      </Switch>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function DashPage() {
  return (
    <div>
      <h1>Dashbaord Page</h1>
    </div>
  );
}

export default App;
