import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

import Main from '@pages/Main';
import Test from '@pages/Test';
import Result from '@pages/Result';
import Process from '@pages/Process';
import KakaoShare from '@pages/KakaoShare';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/test' element={<Test />} />
          <Route path='/result' element={<Result />} />
          <Route path='/process' element={<Process />} />
          <Route path='/kakao-share' element={<KakaoShare />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
