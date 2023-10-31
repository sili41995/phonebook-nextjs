'use client';

import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthFormMessage from '@/components/AuthFormMessage';
import Input from '@/components/Input';
import { formType, iconBtnType, iconSizes, pagesPath } from '@/constants';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import defaultAvatar from '@/images/default-signin-avatar.png';
import { toasts } from '@/utils';
import { selectIsLoading } from '@/redux/auth/selectors';
import { loginUser } from '@/redux/auth/operations';
import css from './LoginForm.module.css';
import Image from 'next/image';

const LoginForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const watchPassword = watch('password');
  const inputType = isShowPassword ? 'text' : 'password';
  const pageLink = `/${pagesPath.registerPath}`;
  const inputPasswordBtnIcon = isShowPassword ? (
    <AiOutlineEyeInvisible size={iconSizes.primaryIconSize} />
  ) : (
    <AiOutlineEye size={iconSizes.primaryIconSize} />
  );

  const toggleIsShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  const onSubmit = (credentials) => {
    dispatch(loginUser(credentials))
      .unwrap()
      .then(() => {
        toasts.successToast('Hello, my friend!');
      });
  };

  return (
    <>
      <h2 className={css.title}>log in</h2>
      <p className={css.message}>Welcome to Phonebook!</p>
      <Image className={css.avatar} src={defaultAvatar} alt='user avatar' />
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type='email'
          placeholder='Email'
          inputType={formType.authForm}
          autoFocus
          inputWrap
          fieldIcon={<MdEmail size={iconSizes.secondaryIconSize} />}
        />
        {errors.email && toasts.errorToast('Email is required')}
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type={inputType}
          placeholder='Password'
          inputType={formType.authForm}
          btnType={watchPassword && iconBtnType.toggleShowPassword}
          action={toggleIsShowPassword}
          inputWrap
          fieldIcon={<AiFillLock size={iconSizes.secondaryIconSize} />}
          btnIcon={inputPasswordBtnIcon}
        />

        {errors.password &&
          toasts.errorToast(
            errors.password.type === 'required'
              ? 'Password is required'
              : 'Password minimum length is 7 characters'
          )}
        <AuthFormMessage
          action={'Sign up'}
          pageLink={pageLink}
          message={"if you don't have an account yet"}
        />
        <button className={css.button} disabled={isLoading} type='submit'>
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
