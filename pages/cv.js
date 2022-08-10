import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function CV() {
    return (
        <Layout>
        <div classNameName="navbar bg-base-100">
            <div classNameName="navbar-start">
            <Head>
                <title>Verdi | CV</title>
                <meta name="description" content="My Working For Everyday" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Perusahaan</th>
                    <th>Jabatan</th>
                    <th>Tahun Masuk</th>
                    <th>Tahun Keluar</th>
                </tr>
                </thead>
                <tbody>
     
                <tr>
                    <th>1</th>
                    <td>KSP SWAMITRA ANUGRAH ARTHA ABADI</td>
                    <td>Analisa Kredit</td>
                    <td>Oktober 2015</td>
                    <td>Juni 2016</td>
                </tr>
       
                <tr>
                    <th>2</th>
                    <td>PT. LAWU INFORMAT ION TECHNOLOGY</td>
                    <td>Help Desk</td>
                    <td>November 2016</td>
                    <td>Desember 2018</td>
                </tr>
    
                <tr>
                    <th>3</th>
                    <td>RSIA FAMILY</td>
                    <td>Staff IT</td>
                    <td>September 2019</td>
                    <td>Sekarang</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
        </Layout>
     )
}