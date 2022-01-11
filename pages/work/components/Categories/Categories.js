import css from "./Categories.module.scss";
import clsx from "clsx";
import {BsGrid1X2, BsPhone} from "react-icons/bs";
import {RiComputerLine} from "react-icons/ri";
import {BiCog} from "react-icons/bi";

export default function Categories({ links, router, currentTag }) {
    return  <section className={css.categories}>
        <ul>
            { links.map((link, index) => {
                let handleCategoryClick = () => {
                    return router.push({
                        pathname: '/work',
                        query: {
                            tag: link.tag
                        }
                    })
                }

                return <li className={clsx({
                    [css.active]: link.tag === currentTag
                })} key={index} onClick={handleCategoryClick}>
                    { link.text }
                </li>
            })}
        </ul>
        <div className={css.legend}>
            <p>legend</p>
            <ul>
                <li>
                    <BsPhone color={'#212121'} />
                    <span>app</span>
                </li>
                <li>
                    <RiComputerLine color={'#212121'} />
                    <span>web</span>
                </li>
                <li>
                    <BiCog color={'#212121'} />
                    <span>cms</span>
                </li>
                <li>
                    <BsGrid1X2 color={'#212121'} />
                    <span>ui/ux</span>
                </li>
            </ul>
        </div>
    </section>
}