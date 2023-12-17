'use client';

import NavigationBar from '@/components/NavigationBar';
import { refreshUser } from '@/redux/auth/operations';
import { FC, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { selectIsRefreshing } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IProps } from './SharedLayout.types';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import { getIsContactsPage } from '@/utils';

const SharedLayout: FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const isContactsPage = getIsContactsPage(pathname);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Header>
          <Container>
            <NavigationBar />
          </Container>
        </Header>
        <Main>
          <Section>
            <Container isContactsPage={isContactsPage}>{children}</Container>
          </Section>
        </Main>
      </>
    )
  );
};

export default SharedLayout;
