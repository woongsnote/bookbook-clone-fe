import Layout from "../components/layout/Layout";
import LoginBox from "../components/register/LoginBox";
import RegisterForm from "../components/register/RegisterForm";
const Register = () => {
  return (
    <Layout>
      <RegisterForm />
      <LoginBox />
    </Layout>
  );
};

export default Register;
