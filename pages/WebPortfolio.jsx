import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/ProjectPages.module.css'
import imgGit from '../public/github.png'
import imgNext from '../public/nextjs.png'
import imgReact from '../public/react.png'

export default function WebPortfolio(){

    return <>
      <Head>
        <title> Web Portfolio</title>
        <meta name='description' content='Website Portfolio project'></meta>
     </Head>

        <h1 className={styles.title}>Website Portfolio</h1>
        <div className={styles.page}>
        <div className={styles.row}>
        <div className={styles.image}><Image src={imgNext} width={400} height={400} alt="Cerebum Lux App"/></div>
            <p>
            This website is a collections of multiple project I have made so far as a programmer. It summaize the level
            of my skills of different computer programming language. This website was made with Nextjs and Github and React.
        </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.rowLeft}>
        <div>
            <h3>The Usage of NextJS</h3>
            <ul>
                <li>The routage of the page is using the Nextjs default routing</li>
                <li>The Website is using Meta data offer by Nextjs</li>
                <li>The compilation and pre-compilation is also using the Nextjs system</li>
            </ul>
        </div>
        <div className={styles.sideImage}><Image src={imgReact} width={400} height={400} alt="Cerebum Lux App"/></div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.row}>
        <div className={styles.sideImage}><Image src={imgGit} width={400} height={400} alt="Cerebum Lux App"/></div>
        <div>
            <h3>The Usage of Git hub</h3>
            <ul>
                <li>Enable me to put my website online</li>
                <li>Used to update my website if needed</li>
                <li>Save all my projects in my Git hub account</li>
            </ul>
        </div>
        </div>
        </div>
    </>
}