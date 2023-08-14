import './Layout.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useFetchCurrentuserQuery } from '../store';

const Layout = () => {
  const { data: currentUser, error, isFetching } = useFetchCurrentuserQuery();

  return (
    <div className="layout">
      <Navbar currentUser={currentUser} />
      <main style={{ marginTop: '6vh' }}>
        <Outlet context={{ currentUser, error, isFetching }} />
      </main>
    </div>
  );
};

export default Layout;
