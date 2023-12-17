import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import RestrictedRoute from '@/components/RestrictedRoute';
import { FormTypes } from '@/constants';

export const metadata = {
  title: 'Sign In',
  description: 'Page for login user',
};

const LoginPage = () => (
  <RestrictedRoute>
    <ModalForm formType={FormTypes.authForm}>
      <SignInForm />
    </ModalForm>
  </RestrictedRoute>
);

export default LoginPage;
