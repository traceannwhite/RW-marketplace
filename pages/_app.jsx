import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import SiteLayout from "../components/SiteLayout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </SessionProvider>
  );
}

export default MyApp;
