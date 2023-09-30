import React, { useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the necessary components
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUpPage from './pages/signup/SignUp';
import SignInPage from './pages/signin/SignIn';
import Layout from './components/layout/Layout';
import Main from './routes/Home';
import Delete from './routes/Delete';
import AddNew from './routes/AddNew';
import MyReservations from './routes/MyReservations';
import Reserve from './routes/Reserve';
import ItemDetail from './routes/ItemDetail';
import { createUser } from './redux/users/users';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(createUser(storedUser));
    }
  }, [dispatch]);

  if (!users || users.length === 0) {
    return (
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/motors" element={<Main />} />
          <Route path="/myReservations" element={<MyReservations />} />
          <Route path="/reserve/:id" element={<Reserve />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/add/:id" element={<AddNew />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/motors/:id" element={<ItemDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
