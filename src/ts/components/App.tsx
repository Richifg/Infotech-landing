import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import content from '../../../content.json';

import Navbar from 'components/Navbar';
import Banner from 'components/Banner';

const App = (): React.ReactElement => (
  <Router>
    <Switch>
      <Route path="/">
        <header>
          <Navbar {...content.navbar} />
        </header>

        <main>
          <Banner {...content.banner} />
        </main>
      </Route>
    </Switch>
  </Router>
);

export default App;
