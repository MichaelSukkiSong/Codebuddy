import { Outlet } from 'react-router-dom';
import { requireAuth } from '../../utilities/requireAuth';

export const loader = async () => {
  await requireAuth();

  return null;
};

const MycodeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MycodeLayout;
