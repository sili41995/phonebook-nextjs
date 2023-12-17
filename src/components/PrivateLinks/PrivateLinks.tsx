import { MouseEvent } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { SlLogout, SlPlus } from 'react-icons/sl';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@/components/IconButton';
import Filter from '@/components/Filter';
import { makeBlur, toasts, getIsContactsPage } from '@/utils';
import { selectContacts } from '@/redux/contacts/selectors';
import { signOutUser } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IconBtnType, IconSizes, PagePaths } from '@/constants/index';
import { LinkContainer } from './PrivateLinks.styled';
import Link from 'next/link';

const PrivateLinks = () => {
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isContactsPage = getIsContactsPage(pathname);
  const showFilter = isContactsPage && Boolean(contacts.length);

  const onLogoutBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    dispatch(signOutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        redirect(PagePaths.homePath);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <LinkContainer>
      {showFilter && <Filter />}
      <Link href={PagePaths.addNewContactPath}>
        <SlPlus />
        <span>New Contact</span>
      </Link>
      <IconButton
        btnType={IconBtnType.logout}
        onBtnClick={onLogoutBtnClick}
        icon={<SlLogout size={IconSizes.otherIconSize} />}
        title='Logout'
      />
    </LinkContainer>
  );
};

export default PrivateLinks;
