import AuthForm from '@/components/AuthForm';
import LoginForm from '@/components/LoginForm';
import RestrictedRoute from '@/components/RestrictedRoute';

export const metadata = {
  title: 'Login',
  description: 'Page for login user',
};

const LoginPage = () => (
  <RestrictedRoute>
    <AuthForm>
      <LoginForm />
    </AuthForm>
  </RestrictedRoute>
);

export default LoginPage;
