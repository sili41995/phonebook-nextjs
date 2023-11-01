import { HiPhone } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { GoX } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import { getContactInfo, makeBlur, toasts } from '@/utils';
import { useTargetContact } from '@/hooks';
import { pagesPath, iconBtnType, iconSizes } from '@/constants';
import { updateContact } from '@/redux/contacts/operations';
import { selectIsLoading } from '@/redux/contacts/selectors';
import { useParams } from 'next/navigation';
import css from './EditForm.module.css';

const EditForm = ({ setEditContact }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const id = useParams()[pagesPath.dynamicParam];
  const targetContact = useTargetContact();
  const { name, number } = getContactInfo(targetContact);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleFormSubmit = (data) => {
    dispatch(updateContact({ data, id }))
      .unwrap()
      .then(() => {
        toasts.successToast('Contact updated successfully');
      })
      .catch(() => {
        toasts.errorToast('Contact update failed');
      });
  };

  const onAcceptBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
  };

  return (
    <>
      <p className={css.title}>Contact editing</p>
      <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          defaultValue={name}
          settings={{ ...register('name', { required: true }) }}
          type='text'
          placeholder='Name'
          inputWrap
          fieldIcon={<FaUser size={iconSizes.inputIcon} />}
        />
        {errors.name && toasts.errorToast('Name is required')}
        <Input
          defaultValue={number}
          settings={{ ...register('number', { required: true }) }}
          type='tel'
          placeholder='Phone'
          inputWrap
          fieldIcon={<HiPhone size={iconSizes.inputIcon} />}
        />
        {errors.number && toasts.errorToast('Phone is required')}
        <div className={css.buttonsContainer}>
          <IconButton
            disabled={isLoading}
            btnType={iconBtnType.accept}
            width={44}
            height={35}
            type='submit'
            icon={<GiCheckMark size={iconSizes.primaryIconSize} />}
            onBtnClick={onAcceptBtnClick}
          />
          <IconButton
            btnType={iconBtnType.cancel}
            width={44}
            height={35}
            onBtnClick={setEditContact}
            icon={<GoX size={iconSizes.primaryIconSize} />}
          />
        </div>
      </form>
    </>
  );
};

export default EditForm;
