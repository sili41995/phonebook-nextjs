import './globals.css';
import ReduxProvider from '@/redux/ReduxProvider';
import SharedLayout from '@/components/SharedLayout';
// import Toast from '@/components/Toast';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>
          <SharedLayout>{children}</SharedLayout>
          {/* <Toast /> */}
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
