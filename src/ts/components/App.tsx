import React, { useState } from 'react';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import content from '../../../content.json';
import theme from 'theme/defaultTheme';
import DialogStore from 'store/DialogStore';

import Navbar from 'components/Navbar';
import Banner from 'components/Banner';
import Section from 'components/Section';
import Dialog from 'components/Dialog';

const App = (): React.ReactElement => {
  const [dialogStore] = useState(new DialogStore());
  return (
    <Provider dialog={dialogStore}>
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
              <Dialog />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
