import { ThemeProvider } from 'styled-components';
import theme from '../config/theme';
import GlobalStyle from '../config/globalStyle';
import NextNProgress from 'nextjs-progressbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color={theme.colors.white}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
