import css from "./Categories.module.scss";
import clsx from "clsx";
import Image from "next/image";
import appIcon from "../../../../assets/icons/ico-app.svg";
import webIcon from "../../../../assets/icons/ico-web.svg";
import cmsIcon from "../../../../assets/icons/ico-cms.svg";
import uiuxIcon from "../../../../assets/icons/ico-uiux.svg";

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
                    <Image src={appIcon} width={13} height={13} alt={'app'}/>
                    <span>app</span>
                </li>
                <li>
                    <Image src={webIcon} width={13} height={13} alt={'web'}/>
                    <span>web</span>
                </li>
                <li>
                    <Image src={cmsIcon} width={13} height={13} alt={'cms'}/>
                    <span>cms</span>
                </li>
                <li>
                    <Image src={uiuxIcon} width={13} height={13} alt={'ui/ux'}/>
                    <span>ui/ux</span>
                </li>
            </ul>
        </div>
    </section>
}