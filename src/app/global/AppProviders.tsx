import { Outlet } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layouts/layout';

{
  /* <ToastContainer position="top-right" /> */
}

export const AppProviders = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
