import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import content from '../../../content.json';
import theme from 'theme/defaultTheme';

import Navbar from 'components/Navbar';
import Banner from 'components/Banner';
import Section from 'components/Section';

const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/">
          <header>
            <Navbar {...content.navbar} />
          </header>

          <main>
            <Banner {...content.banner} />
            {content.sections.map((section) => (
              <Section key={section.id} {...section} />
            ))}
          </main>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
