import {Outlet} from 'react-router-dom'
import HomeNav from './homeComponents/HomeNav'

const SharedLayout = () => {
  return (
    <>
      < HomeNav />
      < Outlet />
    </>
  );
};
export default SharedLayout;