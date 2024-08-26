import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <div className="min-h-[85vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;