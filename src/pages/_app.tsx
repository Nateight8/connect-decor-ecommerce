import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import theme from '@/components/theme';
import NavBar from '@/components/navcomponent/NavBar';
import { ThemeProvider } from '@mui/material/styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Provider store={store}>
      <ThemeProvider theme={theme} >
        {/* <CssBaseline /> */}
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )


}