import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ProjectPages.module.css'
import imgSql from '../public/sql.png'
import imgXaml from '../public/xaml.png'
import imgCsharp from '../public/csharp.png'

export default function StudentManagement(){

    return <>
        <Head>
            <title>Student Management</title>
            <meta name='description' content='Student Management project'></meta>
        </Head>

        <h1 className={styles.title}>Student Management Sofware</h1>
        <div className={styles.page}>
        <div className={styles.row}>
        <div className={styles.image}><Image src={imgCsharp} width={400} height={400} alt="Cerebum Lux App"/></div>
            <p>
            A total of 4 programmers participated in the creation of this software. It is a simple software that enables us 
          to add, delete, and modify students. Furthermore, it allowed us also to add or delete school programs.
          The main tools that made this project possible are WPF, Csharp, and MSSQL for the database.
        </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.rowLeft}>
        <div>
            <h3>The Usage of XAML</h3>
            <ul>
                <li>Xaml was use for the front end of the project</li>
                <li>Enable us to interact with different pages</li>
                <li>The theme and colors was mades with XAML</li>
            </ul>
        </div>
        <div className={styles.sideImage}><Image src={imgXaml} width={400} height={400} alt="Cerebum Lux App"/></div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.row}>
        <div className={styles.sideImage}><Image src={imgSql} width={400} height={400} alt="Cerebum Lux App"/></div>
        <div>
            <h3>The Usage of MSSQL</h3>
            <ul>
                <li>Create Logique SQL diagram</li>
                <li>Used for the back end of the project</li>
                <li>Enable us to see real time changements of our project</li>
            </ul>
        </div>
        </div>
        </div>
    </>
}