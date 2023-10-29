import AuthForm from '@/components/AuthForm';
import LoginForm from '@/components/LoginForm';

const Home = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <AuthForm>
      <LoginForm />
    </AuthForm>
  );
};

export default Home;
