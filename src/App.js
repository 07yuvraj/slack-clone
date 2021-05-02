import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import {useStateValue} from './StateProvider';
import Home from './Home';

function App() {
  const [{user}]=useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route exact path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
