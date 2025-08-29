import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function ComponentsLayout() {
  return (
      <div className='flex py-10'>
        <Sidebar />
        <div className='flex-1'>
        <Outlet/>
        </div>
      </div>
  );
}

export default ComponentsLayout;