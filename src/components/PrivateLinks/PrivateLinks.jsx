'use client';

import { SlLogout } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { GrAddCircle } from 'react-icons/gr';
import IconButton from '@/components/IconButton';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { makeBlur, toasts, isContactsPage } from '@/utils';
import { pagesPath, iconBtnType, iconSizes } from '@/constants';
import { selectContacts } from '@/redux/contacts/selectors';
import { logoutUser } from '@/redux/auth/operations';
import Filter from '@/components/Filter';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import css from './PrivateLinks.module.css';

const PrivateLinks = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const addNewContactPath = `/${pagesPath.addNewContactPath}?${searchParams}`;
  const isShowFilter = isContactsPage(pathname) && !!contacts.length;
  const router = useRouter();

  const onLogoutBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        router.push(pagesPath.homePath, {
          scroll: false,
        });
      });
  };

  return (
    <div className={css.container}>
      {isShowFilter && <Filter />}
      <Link href={addNewContactPath}>
        <span className={css.iconWrap}>
          <GrAddCircle />
        </span>
        New Contact
      </Link>
      <IconButton
        btnType={iconBtnType.logout}
        width={44}
        onBtnClick={onLogoutBtnClick}
      >
        <span className={css.iconWrap}>
          <SlLogout size={iconSizes.otherIconSize} />
        </span>
        Logout
      </IconButton>
    </div>
  );
};

export default PrivateLinks;
