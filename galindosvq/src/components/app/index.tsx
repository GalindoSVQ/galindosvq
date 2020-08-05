import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles';
import Welcome from 'containers/welcome';

const App = () => (
  <ThemeProvider theme={theme}>
    <Welcome />
  </ThemeProvider>
);

export default App;
