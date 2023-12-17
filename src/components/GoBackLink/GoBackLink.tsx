import { FC } from 'react';
import { PagePaths } from '@/constants';
import { IProps } from './GoBackLink.types';
import { StyledLink } from './GoBackLink.styled';
import { useSearchParams } from 'next/navigation';

const GoBackLink: FC<IProps> = ({ title = 'Go Back', height }) => {
  const searchParams = useSearchParams();

  return (
    <StyledLink
      height={height}
      href={`/${PagePaths.contactsPath}?${searchParams}`}
    >
      {title}
    </StyledLink>
  );
};

export default GoBackLink;
