import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Kontak() {
    return (
        <Layout>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <Head>
                <title>Verdi | Kontak</title>
                <meta name="description" content="My Working For Everyday" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <p> This is Kontak </p>
            </div>    
        </div>
        </Layout>
     )
}