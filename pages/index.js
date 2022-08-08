import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Verdi Verdian</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/cv"><a>CV</a></Link></li>
          <li><Link href="/skill"><a>Skill</a></Link></li>
          <li><Link href="/pendidikan"><a>Pendidikan</a></Link></li>
          <li><Link href="/kontak"><a>Kontak</a></Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>  
  )
}
