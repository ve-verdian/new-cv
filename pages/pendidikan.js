import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Pendidikan() {
    return (
        <Layout>
        <div classNameName="navbar bg-base-100">
          <div classNameName="navbar-start">
            <Head>
                <title>Verdi | Pendidikan</title>
                <meta name="description" content="My Working For Everyday" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="hero bg-base-100">
            <div className="hero-content text-center"></div>
            <ul className="steps steps-vertical">
                <li className="step step-primary">SDN 9 Mulyoharjo Pemalang | 1998 - 2004</li>
                <li className="step step-primary">SMP PIUS Pemalang | 2004 - 2007</li>
                <li className="step step-primary">MAN Pemalang | IPA | 2007 - 2010</li>
                <li className="step step-primary">PENDIDIKAN Universitas Semarang | <br/> S1 - TEKNIK INFORMATIKA | 2010 - 2015 | GPA : 2.92</li>
            </ul>
            </div>
            </div>
        </div>    
        </Layout>
     )
}