import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Posts";
import { RoutePaths } from "./routes";
import { LikesPageById } from "./pages";

function App() {
  return (
    <Router>
      <Route path="/likes/:postId" exact>
        {/* <Navbar /> */}
        <LikesPageById />
      </Route>
      <Route path="/" exact>
        <Navbar />
        <Posts />
      </Route>
    </Router>
  );
}

export default App;
