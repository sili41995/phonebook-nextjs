import Link from 'next/link';
import { IProps } from './AuthFormMessage.types';
import { Message } from './AuthFormMessage.styled';

export const AuthFormMessage = ({ message, pageLink, action }: IProps) => (
  <Message>
    <Link href={pageLink}>{action}</Link>
    {` ${message}`}
  </Message>
);

export default AuthFormMessage;
