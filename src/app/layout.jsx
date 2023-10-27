'use client';

import SharedLayout from '@/components/SharedLayout';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/constants/theme';
import { ThemeProvider } from 'styled-components';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <SharedLayout>{children}</SharedLayout>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
