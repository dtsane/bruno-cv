import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/ProjectPages.module.css'
import imgFirebase from '../public/firebase.png'
import imgFlutter from '../public/flutter.png'
import imgAndroid from '../public/android.png'

export default function CerebrumApp(){

    return <>
          <Head>
            <title>Cerebrum Lux App</title>
            <meta name='description' content='Cerebrum Lux app project'></meta>
        </Head>
        <h1 className={styles.title}>Cerebrum Lux App </h1>
        <div className={styles.page}>
        <div className={styles.row}>
        <div className={styles.image}><Image src={imgAndroid} width={400} height={400} alt="Cerebum Lux App"/></div>
            <p>
            This is an app I created for my company. The beta version app will be release in may 27th 2022 in google play.
            It has for purpose to help client achieve their project goal such as website, mobile application ... 
            They will able to request my services via the application and have 24/7 customers service help if they
            need anything. I created this app with flutter for the front end, and firebase for the back end.
        </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.rowLeft}>
        <div>
            <h3>The Usage of Flutter</h3>
            <ul>
                <li>Use Flutter for smooth transition between pages</li>
                <li>Enable me to use localisation API</li>
                <li>Work Frame of flutter gave me the option to render my app to IOS</li>
                <li>Use the phone ressource to send real time notifications</li>
            </ul>
        </div>
        <div className={styles.sideImage}><Image src={imgFlutter} width={400} height={400} alt="Cerebum Lux App"/></div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.row}>
        <div className={styles.sideImage}><Image src={imgFirebase} width={400} height={400} alt="Cerebum Lux App"/></div>
        <div>
            <h3>The Usage of Firebase</h3>
            <ul>
                <li>User athentication is done via Firebase</li>
                <li>Using Firebase Cloud Firestore to stock user data </li>
                <li>Using Firebase clound messaging to send notifications to all users</li>
                <li>Using Firebase Functions to access all Firebase API</li>
            </ul>
        </div>
        </div>
        </div>
    </>
}