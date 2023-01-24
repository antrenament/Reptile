import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from '$application/Application';

export default async function initialize() {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Application />
  );
}
