import { isContactsPage } from '@/utils';

const getContainerClassName = ({ css, pathname, isAuthPage }) => {
  const containerClassName = isContactsPage(pathname)
    ? css.flexContainer
    : css.container;
  const additionalClassName = isAuthPage && 'authContainer';
  return `${containerClassName} ${additionalClassName}`;
};

export default getContainerClassName;
