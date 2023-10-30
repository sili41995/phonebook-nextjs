import Link from 'next/link';
import { pagesPath } from '@/constants';
import { usePathname } from 'next/navigation';
import css from './PublicLinks.module.css';

const PublicLinks = () => {
  const pathname = usePathname();
  const registerPagePath = `/${pagesPath.registerPath}`;
  const loginPagePath = `/${pagesPath.loginPath}`;

  return (
    <ul className={css.menu}>
      <li className={css.menuItem}>
        <Link
          href={registerPagePath}
          className={pathname === registerPagePath ? 'active' : false}
        >
          Sign up
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link
          href={loginPagePath}
          className={pathname === loginPagePath ? 'active' : false}
        >
          Log in
        </Link>
      </li>
    </ul>
  );
};

export default PublicLinks;
