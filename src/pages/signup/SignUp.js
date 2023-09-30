import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/auth';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the isLoading state from the Redux store
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch the signup action
      await dispatch(signup({ username }));

      // Redirect to the home page upon successful signup
      navigate('/home');
    } catch (error) {
      setError('Signup failed. Please try again.'); // Set an error message to display to the user
    }
  };

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="container mt-5 ml-1 col-sm-4 mx-auto">
      <form onSubmit={handleSubmit} className="form m-2">
        <h3 className="text-center">SignUp</h3>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="User name"
            onChange={handleOnChange}
            value={username}
          />
        </div>
        {error && <div className="text-danger">{error}</div>}
        {/* Display the error message */}
        <button className="btn btn-success" type="submit" disabled={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
