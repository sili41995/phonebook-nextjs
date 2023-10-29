'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Navigation from '@/components/Navigation';
import { refreshUser } from '@/redux/auth/operations';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setAuthPageBackgroundColor, isContactsPage } from '@/utils';
import { selectIsRefreshing } from '@/redux/auth/selectors';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  setAuthPageBackgroundColor(pathname);

  return (
    !isRefreshing && (
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
    )
  );
};

export default SharedLayout;
