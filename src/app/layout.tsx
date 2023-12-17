'use client';

import StyledComponentsRegistry from './lib/registry';
import { inter, jua } from './fonts';
import ReduxProvider from '@/redux/ReduxProvider';
import { ThemeProvider } from 'styled-components';
import theme from '@/constants/theme';
import SharedLayout from '@/components/SharedLayout';
import Toast from '@/components/Toast';
import GlobalStyles from '@/components/GlobalStyles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${jua.variable}`}>
      <body>
        <ThemeProvider theme={theme}>
          <ReduxProvider>
            <StyledComponentsRegistry>
              <SharedLayout>{children}</SharedLayout>
            </StyledComponentsRegistry>
            <Toast />
            <GlobalStyles />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
