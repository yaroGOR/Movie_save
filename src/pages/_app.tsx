import Footer from '../components/organisms/Footer'
import Navbar from '../components/organisms/Navbar';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider, useSelector } from 'react-redux';
import store from '../components/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Provider store ={store}>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  </>)
}
