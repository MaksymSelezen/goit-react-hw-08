// import { Field, Formik, Form } from 'formik';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { loginThunk, logoutThunk } from '../redux/auth/operations';
import { MdArrowBackIos } from 'react-icons/md';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="bodyLogin">
      <Link to="/">
        <button className="backBtn">
          <MdArrowBackIos />
        </button>
      </Link>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
