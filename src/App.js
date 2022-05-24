import React from 'react';
import './App.css';
import Post from './Post';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { get } from 'e-graphql-client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Posts from './Posts';
import New from './New';

function App() {
  // const {loading,error,data} = useQuery(getAllStory)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/likes">
            <Navbar />
          </Route>
          <Route path="/">
            <Navbar />
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
