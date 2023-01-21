'use client';

import NavBar from '@/components/navcomponent/NavBar'
import './globals.css'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from '@mui/material';
import theme from '@/components/theme';
import CssBaseline from '@mui/material/CssBaseline';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

        {children}
        {/* </ThemeProvider >
        </Provider> */}
      </body>
    </html>
  )
}
