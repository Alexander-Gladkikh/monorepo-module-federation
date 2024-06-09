import React from 'react';
import {Outlet} from "react-router-dom";
import {deepMerge} from '@packages/shared/src/utils/deepMerge'
import UserCard from "@packages/shared/src/component/UserCard";

export const App = () => {

  deepMerge()

  return (
    <div>
      <h1>Admin Module</h1>
      <UserCard username={'Admin'}/>
      <Outlet/>
    </div>
  );
};
