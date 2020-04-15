import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Comments } from './components/Comments';
import { Header } from './components/Header';
import { SignIn } from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/home" render={() => <div>Home</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
