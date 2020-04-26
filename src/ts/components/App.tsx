import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import content from '../../../content.json';
import theme from 'theme/defaultTheme';

import Navbar from 'components/Navbar/NavbarController';
import PageBanner from 'components/PageBanner';
import PageSection from 'components/PageSection';

const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/">
          <header>
            <Navbar {...content.navbar} />
          </header>

          <main>
            <PageBanner {...content.banner} />
            {content.sections.map((section) => (
              <PageSection key={section.id} {...section} />
            ))}
          </main>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
