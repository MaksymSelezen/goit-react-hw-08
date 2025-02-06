import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import { Field, Form, Formik } from 'formik';

const RegistrationForm = () => {
  const initialValues = {
    password: '',
    email: '',
    name: '',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate('/'));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="loginContainer">
          <h3 className="subTitleLogin">Register</h3>
          <label className="inputGroup">
            <span>Name</span>
            <Field name="name" />
          </label>
          <label className="inputGroup">
            <span className="spanLogin">Email</span>
            <Field name="email" />
          </label>
          <label className="inputGroup">
            <span className="spanLogin">Password</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit" className="loginBtn">
            Register
          </button>
          <p className="notHaveAccount">
            You already have account?{' '}
            <Link to="/login" className="goRegister">
              Login🚀
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
