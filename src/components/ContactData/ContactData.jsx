'use client';

import { HiOutlinePhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { RiChat1Line } from 'react-icons/ri';
import ActionLink from '@/components/ActionLink';
import { getContactInfo, getPhoneNumber } from '@/utils';
import { useTargetContact } from '@/hooks';
import { iconBtnType } from '@/constants';
import css from './ContactData.module.css';

const ContactData = () => {
  const targetContact = useTargetContact();
  const { number, email, chat } = getContactInfo(targetContact);
  const phoneNumber = getPhoneNumber(number);

  return (
    <div className={css.container}>
      <div className={css.field}>
        <div>
          <p className={css.infoDesc}>Phone number</p>
          <p className={css.infoData}>{number}</p>
        </div>
        <ActionLink link={`tel:${phoneNumber}`} btnType={iconBtnType.phone}>
          <HiOutlinePhone />
        </ActionLink>
      </div>
      <div className={css.field}>
        <div>
          <p className={css.infoDesc}>Email Address</p>
          <p className={css.infoData}>{email}</p>
        </div>
        <ActionLink link={`mailto:${email}`} btnType={iconBtnType.message}>
          <IoMdMail />
        </ActionLink>
      </div>
      <div className={css.field}>
        <div>
          <p className={css.infoDesc}>Chat</p>
          <p className={css.infoData}>{chat}</p>
        </div>
        <ActionLink
          link={`tg://resolve?domain=${chat}`}
          btnType={iconBtnType.chat}
        >
          <RiChat1Line />
        </ActionLink>
      </div>
    </div>
  );
};

export default ContactData;
