'use client';

import NavigationBar from '@/components/NavigationBar';
import Loader from '@/components/Loader';
import { refreshUser } from '@/redux/auth/operations';
import { FC, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { selectIsRefreshing } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IProps } from './SharedLayout.types';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import { getIsContactsPage } from '@/utils';
import { theme } from '@/constants';

const SharedLayout: FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const isContactsPage = getIsContactsPage(pathname);
  const style = {
    display: isContactsPage ? 'flex' : 'block',
    gap: isContactsPage ? `${theme.primaryGap}px` : 0,
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Header>
        <Container>
          <NavigationBar />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container style={style}>{children}</Container>
        </Section>
      </Main>
    </>
  );
};

export default SharedLayout;
