import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="bodyLogin">
      <Link to="/">
        <button className="backBtn">
          <MdArrowBackIos />
        </button>
      </Link>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
