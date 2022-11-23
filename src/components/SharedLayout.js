import {Outlet} from 'react-router-dom'
import HomeNav from './homeComponents/HomeNav'
import FooterNav from './homeComponents/FooterNav'

const SharedLayout = () => {
  return (
    <>
      < HomeNav />
      < Outlet />
    </>
  );
};
export default SharedLayout;