import '../../public/styles/bundle.scss';
import 'antd/dist/antd.css';
import { store } from './../store/index'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
