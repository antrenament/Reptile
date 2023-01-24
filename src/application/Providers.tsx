import React from 'react';

import BrowserRouter from '$application/BrowserRouter';
import { ReactQueryProvider } from '$application/reactQuery';

export default function Providers(props: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading</div>}>
        <ReactQueryProvider>{props.children}</ReactQueryProvider>
      </React.Suspense>
    </BrowserRouter>
  );
}
