import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from "axios";
let number = 0;
function MyApp({ Component, pageProps }: AppProps) {
  //此处在客户端执行二次，在服务端执行一次，注意代码
  //pageProps应该是全局的props

  return <Component {...pageProps} />
}

export default MyApp
