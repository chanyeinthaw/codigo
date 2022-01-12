import css from './Nav.module.scss'
import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/logo-codigo-red.svg'
import {useRouter} from "next/router";
import React, {useMemo, useState} from "react";
import clsx from "clsx";

export default function Nav({ variant = 'main'}) {
    let router = useRouter()

    let links = useMemo(() => ([
        { text: 'Work', href: '/work' },
        { text: 'Solutions', href: '/solutions' },
        { text: 'Services', href: '/services' },
        { text: 'About Us', href: '/about-us' },
        { text: 'Blog', href: '/blog' },
    ]), [])

    let isSecondary = useMemo(() => variant !== 'main', [variant])

    return <React.Fragment>
        <nav className={clsx(css.navRoot, {
            [css.navRootSecondary]: isSecondary
        })}>
            <MainNavContent links={links} router={router} isSecondary={isSecondary}/>
            <SmallScreenNavContent links={links} isSecondary={isSecondary}/>
        </nav>
    </React.Fragment>
}

function MainNavContent({ links, router, isSecondary }) {
    return <React.Fragment>
        { !isSecondary && <React.Fragment>
            <Link href={'https://codigo.co'} passHref>
                <a>
                    <Image width={145} height={33} src={logo} alt='logo' />
                </a>
            </Link>
            <ul className={css.links}>
                { links.map((link, index) => {
                    return <li key={index} className={router.pathname === link.href ? css.active : ''}>
                        <Link href={link.href}>{ link.text }</Link>
                    </li>
                }) }
            </ul>
        </React.Fragment> }

        { isSecondary &&  <ul>
            <li className={css.backToWorkListItem}>
                <Link href={'/work'}>
                    Back to work
                </Link>
            </li>
        </ul> }
        <Link href={'/request-a-quote'} passHref>
            <button>Request a quote</button>
        </Link>
    </React.Fragment>
}

function SmallScreenNavContent({ links, isSecondary }) {
    let [menuShouldOpen, setMenuShouldOpen] = useState(false)

    return <React.Fragment>
        <div className={clsx(css.menuButton, {
            [css.menuButtonOpened]: menuShouldOpen === true
        })} onClick={() => setMenuShouldOpen(!menuShouldOpen)}>
            <div />
            <div />
            <div />
        </div>

        <div className={clsx(css.navMenu, {
            [css.navMenuOpened]: menuShouldOpen === true
        })}>
            { !isSecondary && links.map((link, index) => {
                return <Link key={index} href={link.href}>{ link.text }</Link>
            }) }
            <Link href={'/request-a-quote'}>Request a quote</Link>
            <Link href={'/contact'}>Let&apos;s chat</Link>
        </div>

        <div className={clsx(css.circle, {
            [css.circleOpened]: menuShouldOpen === true
        })} />
    </React.Fragment>
}