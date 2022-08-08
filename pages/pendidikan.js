import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Pendidikan() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <Head>
                <title>Verdi | Pendidikan</title>
                <meta name="description" content="My Working For Everyday" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <p> This is Pendidikan </p>
            </div>    
        </div>
     )
}