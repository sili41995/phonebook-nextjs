import { FC, MouseEvent } from 'react';
import { IProps } from './ActionLink.types';
import { makeBlur } from '@/utils';
import { Link } from './ActionLink.styled';

const ActionLink: FC<IProps> = ({ link, icon, btnType }) => {
  const onBtnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Link btnType={btnType} href={link} onClick={onBtnClick}>
      {icon}
    </Link>
  );
};

export default ActionLink;
