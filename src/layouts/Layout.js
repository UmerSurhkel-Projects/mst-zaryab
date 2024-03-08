import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/sidebar/LeftSidebar';

const Layout = () => {
  return (
    <div className="main-wrapper">
      <div className="content main_content">
        <LeftSidebar/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
