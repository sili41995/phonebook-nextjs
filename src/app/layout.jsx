'use client';

import './globals.css';
import SharedLayout from '@/components/SharedLayout';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/constants/theme';
import { ThemeProvider } from 'styled-components';
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
            </StyledComponentsRegistry>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
