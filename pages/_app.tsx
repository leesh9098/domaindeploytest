import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsmobile from "../src/aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsmobile);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AmplifyProvider>
  )
}

export default MyApp
