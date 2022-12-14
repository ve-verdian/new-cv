import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <Layout>
        <div className="navbar bg-base-100">
            <div className={styles.container}>
        <Head>
            <title>Verdi | About</title>
        </Head>

        <main className={styles.main}>
            <section>
            <h1 className={styles.title}>
            ve-verdian
            </h1>
            </section>

            <section>
            <p className={styles.description}>
            Perkenalkan nama saya Verdi Verdian umur 30
            tahun sudah menikah punya anak satu. Saya tergolong orang
            yang humoris, tepat waktu, jujur, dan
            bertanggung jawab. Hobi membaca, traveling,
            dan bermain musik.
            </p>
            </section>

            <section>
            <div className={styles.grid}>
            <a href="https://github.com/ve-verdian" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <h2>GitHub</h2>
            </a>

            <a href="https://www.instagram.com/ve_verdian/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <h2>Instagram</h2>
            </a>

            <a href="https://twitter.com/L4sagna_Band" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <h2>Twitter</h2>
            </a>

            <a href="https://www.linkedin.com/in/verdi-verdian-0b0474171/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <h2>Linkedin </h2>
            </a>

            <a href="https://www.youtube.com/channel/UCligj1sQ8SLWkuBsEYDjq5g/featured" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <h2>Youtube </h2>
            </a>
            </div>
            </section>
        </main>
            </div>    
        </div>
        </Layout>
     )
}