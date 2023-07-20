import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

import Home from '@pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
