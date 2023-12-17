import { redirect } from 'next/navigation';
import { selectIsLoggedIn, selectIsRefreshing } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { IProps } from './PrivateRoute.types';
import { PagePaths } from '@/constants';

const PrivateRoute = ({ element }: IProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const homePath = `/${PagePaths.signInPath}`;

  if (shouldRedirect) {
    redirect(homePath);
  } else {
    return element;
  }
};

export default PrivateRoute;
