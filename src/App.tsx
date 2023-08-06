import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

import Main from '@pages/Main';
import Test from '@pages/Test';
import Result from '@pages/Result';
import Process from '@pages/Process';
import Error from '@pages/Error';

const ErrorFallBack = () => {
  return <Error />;
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/test' element={<Test />} />
            <Route path='/result/:mbti' element={<Result />} />
            <Route path='/process' element={<Process />} />
            <Route path='/error' element={<Error />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
