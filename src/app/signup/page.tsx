import ModalForm from '@/components/ModalForm';
import SignUpForm from '@/components/SignUpForm';
import RestrictedRoute from '@/components/RestrictedRoute';
import { FormTypes } from '@/constants';

export const metadata = {
  title: 'Sign Up',
  description: 'Page for register new user',
};

const RegisterPage = () => (
  <RestrictedRoute>
    <ModalForm formType={FormTypes.authForm}>
      <SignUpForm />
    </ModalForm>
  </RestrictedRoute>
);

export default RegisterPage;
