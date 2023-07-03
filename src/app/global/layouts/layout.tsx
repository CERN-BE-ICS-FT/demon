import { ReactNode } from 'react';
import '../../../index.css';
import './layout.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="page flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
