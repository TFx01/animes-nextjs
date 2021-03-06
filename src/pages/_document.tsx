import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
              rel='preconnect'
              href='https://fonts.gstatic.com'
              crossOrigin='true'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Tajawal:wght@200&display=swap'
              rel='stylesheet'
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
