import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import RestrictedRoute from '@/components/RestrictedRoute';
import { FormTypes } from '@/constants';

export const metadata = {
  title: 'Phonebook',
  description: 'App for your contacts',
};

const Home = () => {
  return (
    <RestrictedRoute>
      <ModalForm formType={FormTypes.authForm}>
        <SignInForm />
      </ModalForm>
    </RestrictedRoute>
  );
};

export default Home;
