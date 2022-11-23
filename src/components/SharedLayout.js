import {Outlet} from 'react-router-dom'
import HomeNav from './homeComponents/HomeNav'
import FooterNav from './homeComponents/FooterNav'

//Component rendered on root route. Loads all other components in the outlet tag. 
const SharedLayout = () => {
  return (
    <>
      < HomeNav />
      < Outlet />
    </>
  );
};
export default SharedLayout;