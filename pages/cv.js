import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function CV() {
    return (
        <Layout>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <Head>
                <title>Verdi | CV</title>
                <meta name="description" content="My Working For Everyday" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <h1> This is Curiculumvitae </h1>
            </div>
        </div>
        </Layout>
     )
}