import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the isLoading state from the Redux store
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        name: username,
      };

      // Dispatch the login action
      await dispatch(login(user));

      // Redirect to the home page upon successful login
      navigate('/home');
    } catch (error) {
      setError('Login failed. Please try again.'); // Set an error message to display to the user
    }
  };

  return (
    <div className="container mt-5 ml-1 col-sm-4 mx-auto">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="text-center">LogIn</h3>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="User name"
            onChange={handleChange}
            value={username}
          />
        </div>
        {error && <div className="text-danger">{error}</div>}
        {/* Display the error message */}
        <button className="btn btn-success" type="submit" disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
