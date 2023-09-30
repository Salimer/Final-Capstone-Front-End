import React from 'react';
import { useSelector } from 'react-redux'; // Import the useSelector hook from react-redux

const LoadingScreen = () => {
  // Use the useSelector hook to access the isLoading state from your Redux store
  const isLoading = useSelector((state) => state.auth.isLoading);

  if (isLoading) {
    // If isLoading is true, display the loading screen
    return (
      <div className="container">
        <div className="spinner" />
      </div>
    );
  }

  // If isLoading is false, don't render anything
  return null;
};

export default LoadingScreen;
