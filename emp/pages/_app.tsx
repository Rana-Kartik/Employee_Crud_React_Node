import { Layout } from "../Componenets/Layout"
import 'semantic-ui-css/semantic.min.css'
import {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
  return (
    <div>
     <Layout>
       <Component {...pageProps}/>
     </Layout>
    </div>
   
  )
}

export default App