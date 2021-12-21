import Link from "next/Link";
import style from "../styles/CustomLink.module.scss"

export default function CustomLink({href, children, isButton}) {
    const typeClass = isButton ? style.button : style.link;

    return (
        <Link href={href}>
            <a className={typeClass}>{children}</a>
        </Link>
    )
}