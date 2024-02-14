import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/sidebar/LeftSidebar';
import RightSidebar from '../components/sidebar/RightSidebar';
import Main from '../components/main/Main';



const Layout = () => {
  return (
    <div className="main-wrapper">
      <div className="content main_content">
        <LeftSidebar/>
        <Main/>
        <Outlet />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
