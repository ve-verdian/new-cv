import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Header() {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <Link href="/">Verdi Verdian</Link></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/cv"><a>CV</a></Link></li>
            <li><Link href="/skill"><a>Skill</a></Link></li>
            <li><Link href="/pendidikan"><a>Pendidikan</a></Link></li>
            <li><Link href="/kontak"><a>Kontak</a></Link></li>
          </ul>
        </div>
      </div>
        )
    }