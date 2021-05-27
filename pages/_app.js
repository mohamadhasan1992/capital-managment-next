import { Provider } from "next-auth/client";
import authReducer from "../store/reducers/authReducer";
import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import Head from "next/head";
import Layout from "../components/layout/layout";
//import thunk from "redux-thunk";

//create redux store and connect to the components
//const store = createStore(authReducer,compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  return(
    <Provider session={pageProps.session}>
      <Layout>
        <Head>
          <title>سامانه مدیریت سرمایه</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

// // Only uncomment this method if you have blocking data requirements for
// // every single page in your application. This disables the ability to
// // perform automatic static optimization, causing every page in your app to
// // be server-side rendered.
// //
// // MyApp.getInitialProps = async (appContext) => {
// //   // calls page's `getInitialProps` and fills `appProps.pageProps`
// //   const appProps = await App.getInitialProps(appContext);
// //
// //   return { ...appProps }
// // }

export default MyApp;
