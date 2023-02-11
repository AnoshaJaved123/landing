import 'bootstrap/dist/css/bootstrap.css';
import 'grapesjs/dist/css/grapes.min.css';
import "../styles/globals.scss";
// import "../styles/navbar2.scss"
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap')
  }, [])
  return <>

    <Component {...pageProps} />
  </>
}

export default MyApp
