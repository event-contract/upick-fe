import App from 'next/app';
import './_app.scss';
import '../scss/base.scss';

function app({ Component, pageProps }) {
  return <Component {...pageProps} />
}
   
app.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  
  return { ...appProps }
}

export default app;