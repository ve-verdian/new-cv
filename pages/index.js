import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Index() {
    return (
      <Layout>
        <section>
        <Head>
            <title>Verdi Verdian</title>
        </Head>
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>
      </section>
      
      <section>
        

      </section>
     </Layout >
    )
  }