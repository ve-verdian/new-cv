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
            Verdi Verdian
            </h1>
            </section>

            <section>
            <p className={styles.description}>
            Halo! Perknelakan Nama Saya Verdi Verdian, berusia 32 tahun. Saya memiliki latar belakang pendidikan S1 di Teknik Informatika dan telah memiliki pengalaman lebih dari 5 tahun di bidang Staf IT. Saya senang bekerja dengan teknologi dan selalu berusaha untuk terus belajar dan berkembang di dunia IT. Jika ada yang ingin Anda ketahui lebih lanjut, silakan tanya saja!
            </p>
            </section>

            <section>
            <div className={styles.grid}>
            <a href="https://github.com/ve-verdian" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <h2>GitHub</h2>
            </a>

            <a href="https://www.instagram.com/ve.verdian/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <h2>Instagram</h2>
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
