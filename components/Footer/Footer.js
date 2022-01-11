import css from './Footer.module.scss'
import Link from "next/link";
import Image from "next/image";

import fbIcon from '../../assets/icons/social-facebook.svg'
import igIcon from '../../assets/icons/social-instagram.svg'
import inIcon from '../../assets/icons/social-linkedIn.svg'
import twIcon from '../../assets/icons/social-twitter.svg'

export default function Footer() {
    return <section className={css.footer}>
        <p>Let&apos;s have a chat</p>
        <ul>
            <li>
                <span>Build</span>
                <span>Help you build something</span>
            </li>
            <li>
                <span>Co-incubate</span>
                <span>Co-incubate an idea together</span>
            </li>
            <li>
                <span>Customize</span>
                <span>Customize a solution for your business</span>
            </li>
            <li>
                <span>Organize</span>
                <span>Organize learning session with us</span>
            </li>
        </ul>
        <section className={css.links}>
            <div>
                <Link href={'https://www.facebook.com/codigo.co/'} passHref>
                    <Image width={20} height={20} src={fbIcon} alt={'facebook'}/>
                </Link>
                <Link href={'https://twitter.com/CodigoApps'} passHref>
                    <Image width={20} height={20} src={twIcon} alt={'twitter'}/>
                </Link>
                <Link href={'https://www.instagram.com/hellocodigo'} passHref>
                    <Image width={20} height={20} src={igIcon} alt={'instagram'}/>
                </Link>
                <Link href={'https://www.linkedin.com/company/codigo-pte-ltd'} passHref>
                    <Image width={20} height={20} src={inIcon} alt={'linked-in'}/>
                </Link>
            </div>
            <p>Copyright © Codigo - Mobile App Developer Singapore</p>
            <p>+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</p>
        </section>
    </section>
}