import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Skill() {
    return (
        <Layout>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <Head>
                <title>Verdi | Skill</title>
                <meta name="description" content="My Working For Everyday" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <p> This is Skill </p>
            </div>    
        </div>
        </Layout>
     )
}