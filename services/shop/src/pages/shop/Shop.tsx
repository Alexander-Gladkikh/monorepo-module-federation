import React from 'react';
import {Link} from "react-router-dom";
import {shopRoutes} from '@packages/shared/src/routes/shop'

const Shop = () => {
  return (
    <h1>
      Shop Component1et
      <Link to={shopRoutes.second}>link to second</Link>
    </h1>
  );
};
export default Shop;
