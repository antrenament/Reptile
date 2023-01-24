import React from 'react';
import { entries } from 'lodash';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes';

function PublicRoutes() {
  return (
    <Routes>
      {entries(publicRoutes).map(([path, { component: Component }]) => {
        return <Route path={path} element={<Component />} key={path} />;
      })}
      <Route path="/*" element={<Navigate replace to={'/'} />} />
    </Routes>
  );
}

export default function Router() {
  return <PublicRoutes />;
}
