import Layout from "../components/layout/Layout";
import LoginForm from "../components/login/LoginForm";
import RegisterBox from "../components/login/RegisterBox";

const Login = () => {
  return (
    <Layout>
      <LoginForm />
      <RegisterBox />
    </Layout>
  );
};

export default Login;
