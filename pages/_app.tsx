import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { AmplifyProvider } from "@aws-amplify/ui-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AmplifyProvider>
  )
}

export default MyApp
