import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import theme from '../config/theme';
import GlobalStyle from '../config/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
