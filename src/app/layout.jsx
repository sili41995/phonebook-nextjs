'use client';

import SharedLayout from '@/components/SharedLayout';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/constants/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/components/GlobalStyle';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <SharedLayout>
              {children}
              <GlobalStyle />
            </SharedLayout>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
