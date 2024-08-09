// app/layout.tsx
"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import '../styles/globals.css';

// 33
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    import('admin-lte/plugins/jquery/jquery.min.js');
    import('admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js');
    import('admin-lte/dist/js/adminlte.min.js');
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Planeta Prescolar</title>
        <link data-n-head="1" rel="icon" type="image/x-icon" href="https://planetapreescolar.com//favicon.ico"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
