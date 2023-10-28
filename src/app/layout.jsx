'use client';

import SharedLayout from '@/components/SharedLayout';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/constants/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/components/GlobalStyle';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import Toast from '@/components/Toast';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <StyledComponentsRegistry>
                <SharedLayout>{children}</SharedLayout>
                <Toast />
                <GlobalStyle />
              </StyledComponentsRegistry>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
