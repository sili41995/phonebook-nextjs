'use client';

import { useDispatch } from 'react-redux';
// import { Suspense } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Navigation from '@/components/Navigation';
import { refreshUser } from '@/redux/auth/operations';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { setAuthPageBackgroundColor, isContactsPage } from '@/utils';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  setAuthPageBackgroundColor(pathname);

  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container isContactsPage={isContactsPage(pathname)}>
            {children}
          </Container>
        </Section>
      </Main>
    </>
  );
};

export default SharedLayout;
