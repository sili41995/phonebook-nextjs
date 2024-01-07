'use client';

import NavigationBar from '@/components/NavigationBar';
import Loader from '@/components/Loader';
import { refreshUser } from '@/redux/auth/operations';
import { FC, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { selectIsRefreshing, selectToken } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IProps } from './SharedLayout.types';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import { getIsContactsPage } from '@/utils';

const SharedLayout: FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const isContactsPage = getIsContactsPage(pathname);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, token]);

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
          <Container $isContactsPage={isContactsPage}>{children}</Container>
        </Section>
      </Main>
    </>
  );
};

export default SharedLayout;
