import { useSelector } from 'react-redux';
import { pagesPath } from '@/constants';
import { selectIsLoggedIn, selectIsRefreshing } from '@/redux/auth/selectors';
import { redirect } from 'next/navigation';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const loginPagePath = `/${pagesPath.loginPath}`;
  if (shouldRedirect) {
    redirect(loginPagePath);
  }

  return children;
};

export default PrivateRoute;
