import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import './AdminRoute.scss'

const AdminRoute = () => {

  return (
    <div className='adminDisplay'>
      <Sidebar />
      <div className='adminContent'>
        <Outlet />
      </div>


    </div>


  )
}

export default AdminRoute