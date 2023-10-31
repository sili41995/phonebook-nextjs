import './globals.css';
import ReduxProvider from '@/redux/ReduxProvider';
import SharedLayout from '@/components/SharedLayout';
import Toast from '@/components/Toast';
import { inter, jua } from './fonts';

const RootLayout = ({ children }) => {
  return (
    <html lang='en' className={`${inter.variable} ${jua.variable}`}>
      <body>
        <ReduxProvider>
          <SharedLayout>{children}</SharedLayout>
          <Toast />
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
