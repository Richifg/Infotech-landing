import React, { useState, useEffect } from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import { IContent } from 'interfaces';
import theme from 'theme/defaultTheme';
import DialogStore from 'store/DialogStore';

import Navbar from 'components/Navbar';
import Banner from 'components/Banner';
import Section from 'components/Section';
import Dialog from 'components/Dialog';

const App = (): React.ReactElement => {
  const [dialogStore] = useState(new DialogStore());
  const [content, setContent] = useState<IContent>(null);

  // content.json is supossed to be in root of dist
  useEffect(() => {
    fetch('content.json')
      .then((res) => res.json())
      .then((res) => setContent(res))
      .catch((err) => console.log(err));
  }, []);

  // #TODO add a page loader... although local json file loads way too fast...
  // still a fallback message in case of error might be neccesary
  if (!content) return null;

  return (
    <Provider dialog={dialogStore}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Provider>
  );
};

export default App;
