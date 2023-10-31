'use client';

import { useDispatch, useSelector } from 'react-redux';
import Navigation from '@/components/Navigation';
import { refreshUser } from '@/redux/auth/operations';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setAuthPageBackgroundColor, getContainerClassName } from '@/utils';
import { selectIsRefreshing } from '@/redux/auth/selectors';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isRefreshing = useSelector(selectIsRefreshing);
  const containerClassName = getContainerClassName(css, pathname);
  setAuthPageBackgroundColor(pathname);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <header className={css.header}>
          <div className={css.container}>
            <Navigation />
          </div>
        </header>
        <main>
          <section className={css.section}>
            <div className={containerClassName}>{children}</div>
          </section>
        </main>
      </>
    )
  );
};

export default SharedLayout;
