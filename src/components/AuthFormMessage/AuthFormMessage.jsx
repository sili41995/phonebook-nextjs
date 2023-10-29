'use client';

import Link from 'next/link';
import { Message } from './AuthFormMessage.styled';

export const AuthFormMessage = ({ message, pageLink, action }) => (
  <Message>
    <Link href={pageLink}>{action}</Link>
    {` ${message}`}
  </Message>
);

export default AuthFormMessage;
