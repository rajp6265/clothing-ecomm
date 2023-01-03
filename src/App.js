import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Route } from "react-router-dom";

const Hats = () => <h1> Hey Hats</h1>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={Hats}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
