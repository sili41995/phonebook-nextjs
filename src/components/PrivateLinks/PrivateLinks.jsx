'use client';

import { SlLogout } from 'react-icons/sl';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrAddCircle } from 'react-icons/gr';
import IconButton from '@/components/IconButton';
// import Filter from 'components/Filter';
// import LinkWithQuery from 'components/LinkWithQuery';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { makeBlur, toasts, isContactsPage } from '@/utils';
import { pagesPath, iconBtnType } from '@/constants';
import { selectContacts } from '@/redux/contacts/selectors';
import { logoutUser } from '@/redux/auth/operations';
import Filter from '@/components/Filter';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const PrivateLinks = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const path = `/${pagesPath.addNewContactPath}`;
  const isShowFilter = isContactsPage(pathname) && !!contacts.length;
  const router = useRouter();

  const onLogoutBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        router.push(pagesPath.homePath);
      });
  };

  return (
    <LinkContainer>
      {isShowFilter && <Filter />}
      <Link href={path}>
        <IconContainer>
          <GrAddCircle />
        </IconContainer>
        New Contact
      </Link>
      <IconButton
        btnType={iconBtnType.logout}
        iconSize={28}
        width={44}
        onBtnClick={onLogoutBtnClick}
      >
        <IconContainer>
          <SlLogout />
        </IconContainer>
        Logout
      </IconButton>
    </LinkContainer>
  );
};

export default PrivateLinks;
