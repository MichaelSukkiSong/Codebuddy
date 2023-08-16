import React from 'react';
import { requireAuth } from '../utilities/requireAuth';

export const loader = async () => {
  await requireAuth();

  return null;
};

const MycodePage = () => {
  return <div>MycodePage</div>;
};

export default MycodePage;
