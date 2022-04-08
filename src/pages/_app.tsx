import type { AppProps } from 'next/app';
import Header from 'src/containers/Header/Header.index';
import GlobalStyle from 'styles/globalStyles';
import 'styles/pagination.less';
import 'styles/global.css';
import { useScrollRestoration } from 'src/hooks/useScrollRestoration';

function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
