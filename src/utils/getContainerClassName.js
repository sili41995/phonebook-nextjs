import { isContactsPage } from '@/utils';

const getContainerClassName = (css, pathname) =>
  isContactsPage(pathname) ? css.flexContainer : css.container;

export default getContainerClassName;
