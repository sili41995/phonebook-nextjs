import AuthForm from '@/components/AuthForm';
import LoginForm from '@/components/LoginForm';
import RestrictedRoute from '@/components/RestrictedRoute';

export const metadata = {
  title: 'Phonebook',
  description: 'App for your contacts',
};

const Home = () => {
  return (
    <RestrictedRoute>
      <AuthForm>
        <LoginForm />
      </AuthForm>
    </RestrictedRoute>
  );
};

export default Home;
