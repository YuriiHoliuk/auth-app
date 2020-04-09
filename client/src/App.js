import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Comments } from './components/Comments';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/comments" component={Comments} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
