import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Test />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
