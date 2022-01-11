import '../styles/globals.scss'
import Nav from "../components/Nav/Nav";

function MyApp({ Component, pageProps }) {
  return (
      <main style={{ display: 'grid' }}>
        <Nav variant={'main'}/>
        <Component {...pageProps} />
      </main>
  )
}

export default MyApp
