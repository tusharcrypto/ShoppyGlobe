import { Outlet } from 'react-router';
import React, { Suspense } from 'react';

const Header = React.lazy(() => import('../Pages/Header.jsx'));

function AppLayout() {
  return (
    <>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Outlet />
    </>
  );
}

export default AppLayout;
