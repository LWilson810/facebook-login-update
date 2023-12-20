import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context';
import { useNProgress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import { SessionProvider } from "next-auth/react"

import 'simplebar-react/dist/simplebar.min.css';
import '../styles/main.css'

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const App = (props) => {

  
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  console.log(pageProps.session)
  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);
  // const theme = createTheme();
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins-Regular',
    },
  });

  return (
    
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Quanmed AI
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthConsumer>
              {
                (auth) => auth.isLoading
                  ? <SplashScreen />
                  : getLayout(<SessionProvider session={pageProps.session} ><Component {...pageProps} /></SessionProvider>)
              }
            </AuthConsumer>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
