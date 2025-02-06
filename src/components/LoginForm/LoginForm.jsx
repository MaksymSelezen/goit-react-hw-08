import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const initialValues = {
    password: '',
    email: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="loginContainer">
          <h3 className="subTitleLogin">Login</h3>
          <label className="inputGroup">
            <span className="spanLogin">Email</span>
            <Field name="email" />
          </label>
          <label className="inputGroup">
            <span className="spanLogin">Password</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit" className="loginBtn">
            Login
          </button>
          <p className="notHaveAccount">
            You do not have account?{' '}
            <Link to="/register" className="goRegister">
              Let`s create✒️
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
