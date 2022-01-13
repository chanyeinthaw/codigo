import Footer from "../../components/Footer/Footer";
import css from './ShowCaseItem.module.scss'
import indexCss from './index.module.scss'
import { BsApple } from "react-icons/bs";
import {FaGooglePlay} from "react-icons/fa";

import Link from 'next/link'
import {useEffect, useState} from "react";
import clsx from "clsx";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

export default function ShowCaseItem() {
    let images = [
        'https://cdn.codigo.co/uploads/2021/04/PAO-3@2x.png',
        'https://cdn.codigo.co/uploads/2021/04/PAO-5@2x.png'
    ]

    let [visibleIndex, setVisibleIndex] = useState(0)


    useEffect(() => {
        let intervalId = setInterval(() => {
            let newVisibleIndex = (visibleIndex + 1) % images.length
            setVisibleIndex(newVisibleIndex)
        }, 3000)

        return () => {
            clearInterval(intervalId)
        }
    }, [visibleIndex])

    return <section className={indexCss.root}>
        <section className={css.showcase}>
            <p className={css.title}>OCBC Pay Anyone</p>
            <section className={css.details}>
                <section className={css.links}>
                    <Link href={'https://www.google.com'} passHref>
                        <a>
                            <BsApple />
                            <span>Available on</span>
                            <span>App store</span>
                        </a>
                    </Link>
                    <Link href={'https://www.google.com'} passHref>
                        <a>
                            <FaGooglePlay />
                            <span>Available on</span>
                            <span>Google play</span>
                        </a>
                    </Link>
                </section>
                <p className={css.description}>
                    You can now pay kopitiam uncles, merchants, peers, and dears with the OCBC Pay Anyone app, and you can even withdraw cash by scanning the QR code at OCBC’s ATMs without your card!You can now pay kopitiam uncles, merchants, peers, and dears with the OCBC Pay Anyone app, and you can even withdraw cash by scanning the QR code at OCBC’s ATMs without your card!
                </p>
                <div className={css.keyFeatures}>
                    <p>Key Features</p>
                    <ul className={css.keyFeatures}>
                        <li>Scan to pay</li>
                        <li>Transfer cash and request payment</li>
                        <li>ATM QR cash withdrawal</li>
                        <li>Access exclusive discounts and promotions</li>
                    </ul>
                </div>
            </section>
            <section className={css.slideShow}>
                <div className={css.images} >
                    { images.map((url, index) => {

                        return <img className={clsx({
                            [css.visible]: index === visibleIndex
                        })} key={index} src={url} alt={'image'}/>
                    }) }
                    <div className={css.circle} />
                </div>
                <div className={css.dots}>
                    { images.map((_, index) => {
                        return <span key={index} className={clsx({
                            [css.red]: visibleIndex === index
                        })}/>
                    }) }
                </div>
            </section>
            <div className={css.navs}>
                <Link href={'/work/prev'}>
                    <a>
                        <AiOutlineArrowLeft />
                    </a>
                </Link>
                <Link href={'/work/next'}>
                    <a>
                        <AiOutlineArrowRight />
                    </a>
                </Link>
            </div>
        </section>
        <Footer />
    </section>
}