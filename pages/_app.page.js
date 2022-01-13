import '../styles/globals.scss'
import Nav from "../components/Nav/Nav";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
    let router = useRouter()
    return (
        <main style={{}}>
            <Nav variant={router.pathname === '/work' ? 'main' : 'secondary'}/>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
