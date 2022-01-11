import css from './Showcase.module.scss'
import Link from "next/link";
import clsx from "clsx";
import { BiCog } from "react-icons/bi"
import { BsGrid1X2, BsPhone } from "react-icons/bs"
import { RiComputerLine } from "react-icons/ri"

export default function Showcase({ works }) {
    let iconRoleMap = {
        app: BsPhone,
        web: RiComputerLine,
        uiux: BsGrid1X2,
        cms: BiCog
    }

    return <section className={css.showcase}>
        {
            works.map((work, index) => {
                return (
                    <Link key={index} href={'https://google.com'} passHref>
                        <a className={clsx(css.workItem, {
                            [css.mediumSized]: work.grid_size === 0.5
                        })}>
                            <img src={work.images.retina} alt={work.name} />
                            <span dangerouslySetInnerHTML={ { __html: work.categories.map(c => c.name).join(', ') } } />
                            <p>
                                { work.name }
                            </p>
                            <div>
                                { work.roles.map(role => {
                                    let Icon = iconRoleMap[role.name]

                                    return (
                                        <div key={role.name}>
                                            <Icon color={'#212121'} />
                                        </div>
                                    )
                                })}
                            </div>
                        </a>
                    </Link>
                )
            })
        }
    </section>
}