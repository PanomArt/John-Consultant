import Layout from '@/components/Layout'
import '@/styles/globals.scss'


export default function App({ Component, pageProps }) {
  return (
    <div className='main app'>
          <Layout>
              <Component {...pageProps} />
          </Layout>   
    </div>
  )
   
}
