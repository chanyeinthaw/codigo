import css from './index.module.scss'
import {useRouter} from "next/router";
import {useMemo} from "react";
import Headline from "./components/Headline/Headline";
import Categories from "./components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Showcase from "./components/Showcase/Showcase";
import axios from "axios";

export default function Home({ data }) {
    let router = useRouter()
    let currentTag = router.query.tag ?? 'all'
    let links = useMemo(() => ([
        { text: 'All', tag: 'all' },
        { text: 'Food & Beverage', tag: 'food-and-beverage' },
        { text: 'Media', tag: 'media' },
        { text: 'Transport & Logistics', tag: 'transport-and-logistics' },
        { text: 'Banking & Finance', tag: 'banking-and-finance' },
        { text: 'Lifestyle', tag: 'lifestyle' },
        { text: 'Co-incubation', tag: 'co-incubation' },
        { text: 'Healthcare', tag: 'healthcare' },
        { text: 'Retail & Entertainment', tag: 'retail-and-entertainment' },
        { text: 'Telco', tag: 'telco' },
        { text: 'Others', tag: 'others' },
        { text: 'Start-ups', tag: 'start-ups' }
    ]), [])

    return (
        <section className={css.root}>
            <section className={css.headlineAndCategories}>
                <Headline />
                <Categories
                    links={links}
                    router={router}
                    currentTag={currentTag} />
            </section>
            <Showcase works={data?.works ?? []}/>
            <Footer />
        </section>
    )
}

export async function getServerSideProps(context) {
    let httpProtocol = context.req.headers.host.includes("localhost") ? 'http' : 'https';

    let res = await axios.get(`${httpProtocol}://${context.req.headers.host}/api/work`)

    return {
        props: {
            data: {
                ...res.data
            }
        }
    }
}