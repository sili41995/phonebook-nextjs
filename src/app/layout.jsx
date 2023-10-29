'use client';

import SharedLayout from '@/components/SharedLayout';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/constants/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/components/GlobalStyle';
import Toast from '@/components/Toast';
import ReduxProvider from '@/redux/ReduxProvider';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>
          <ThemeProvider theme={theme}>
            <StyledComponentsRegistry>
              <SharedLayout>{children}</SharedLayout>
              <Toast />
              <GlobalStyle />
            </StyledComponentsRegistry>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
