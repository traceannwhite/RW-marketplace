import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import SiteLayout from "../components/SiteLayout";

function MyApp({ Component, pageProps }) {
  
  return (
    <UserProvider>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </UserProvider>
  );
}

export default MyApp;
