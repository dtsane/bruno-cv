import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import imgFlutter from '../public/flutter.png'
import imgFirebase from '../public/firebase.png'
import imgReact from '../public/react.png'
import imgNext from '../public/nextjs.png'
import imgGit from '../public/github.png'
import imgAndroid from '../public/android.png'
import imgXaml from '../public/xaml.png'
import imgSql from '../public/sql.png'
import img6 from '../public/csharp.png'
import styles from "../styles/MyProjects.module.css"


export default function MyProjects() {
    return <>
      <Head>
        <title>My Projects</title>
        <meta name='description' content='Project page contains all my projects'></meta>
      </Head>

    <h1 className={styles.title}>Bruno's Top Projects</h1>

    <div className={styles.projectContainer}>
    <div className={styles.image}><Image src={imgAndroid} alt="Cerebum Lux App"/></div>
     <div>
       <h1> Cerebrum Lux App</h1>
       <p>
         This was an app I created for my company. The app will be release in may 27th 2022.
         It has for purpose to help client achieve their project goal such as website, mobile application ... 
         They will able to request my services via the application and have 24/7 customers service help if they
         need anything. I created this app with flutter for the front end, and firebase for the back end.
       </p>
       <h5> Main Tool Used:</h5>
       <Image src={imgFlutter} alt="flutter" width={50} height={50}/>
       <Image src={imgAndroid} alt="android studio" width={50} height={50}/>
       <Image src={imgFirebase} alt="android studio" width={50} height={50}/>
       <h6><Link href="/CerebrumApp">Learn more +</Link></h6>
     </div>
    </div>
    <div className={styles.divider}></div>
    <div className={styles.projectContainer}>
    <div className={styles.image}><Image src={img6} alt="csharp"/></div>
     <div>
       <h1>Student Management Sofware</h1>
       <p>
       This sofware was made in collaboration of 4 programmers. It was a simple sofware that had enable us 
            to add, delete, modifie students. Futhermore, it gave us the capacity to also add or delete school programs.
            The main tools that made this project possible is WPF, Csharp and MSSQL for the database.
       </p>
       <h5> Main Tool Used:</h5>
       <Image src={imgSql} alt="MS Sql" width={50} height={50}/>
       <Image src={img6} alt="C sharp" width={50} height={50}/>
       <Image src={imgXaml} alt="XAML" width={50} height={50}/>
       <h6><Link href="/StudentManagement">Learn more +</Link></h6>
     </div>
    </div>
    <div className={styles.divider}></div>
    <div className={styles.projectContainer}>
    <div className={styles.image}><Image src={imgReact} alt="Ios App"/></div>
     <div>
       <h1>Personal Portfolio Website</h1>
       <p>
        This was an app I created for my company. The app will be release in may 27th 2022.
         It has for purpose to help client achieve their project goal such as website, mobile application ... 
         They will able to request my services via the application and have 24/7 customers service help if they
         need anything. I created this app with flutter for the front end, and firebase for the back end.
       </p>
       <h5> Main Tool Used:</h5>
       <Image src={imgNext} alt="Next Js" width={50} height={50}/>
       <Image src={imgReact} alt="React" width={50} height={50}/>
       <Image src={imgGit} alt="Github" width={50} height={50}/>
       <h6><Link href="/WebPortfolio">Learn more +</Link></h6>
     </div>
    </div>
  
    </>
  }