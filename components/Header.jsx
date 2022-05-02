import Link from "next/link";
import stylesHeader from "../styles/Header.module.css"

export default function Header(){
    return <header className={stylesHeader.header}>
        <h1> Bruno Tsane</h1>
        <nav>
            <ul>
                <li><Link href="/">Acceuil</Link></li>
                <li><Link href="/myProjects">My Projects</Link></li>
                <li><Link href="#contactForm">Contact</Link></li>
            </ul>
        </nav>
    </header>
}