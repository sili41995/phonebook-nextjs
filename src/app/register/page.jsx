import AuthForm from '@/components/AuthForm';
import RegisterForm from '@/components/RegisterForm';
import RestrictedRoute from '@/components/RestrictedRoute';

export const metadata = {
  title: 'Register',
  description: 'Page for register new user',
};

const RegisterPage = () => (
  <RestrictedRoute>
    <AuthForm>
      <RegisterForm />
    </AuthForm>
  </RestrictedRoute>
);

export default RegisterPage;
