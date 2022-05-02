import Head from 'next/head'
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import imgSmile from '../public/imgSmile.jpg'
import AboutMeModal from '../allModals/AboutMeModal';
import SkillsModal from '../allModals/SkillsModal';

export default function Home() {

  const [modalSkillShow, setModalSkillShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return <>
  <Head>
    <title> Acceuil</title>
    <meta name='description' content='Home page contains about me and all my projects'></meta>
  </Head>
  <div className={styles.container}>
  <Image src={imgSmile} alt="Smiling handsome man"/>
  <ul>
    <li onClick={() => setModalShow(true)}><span>A</span><Link href="/">bout Me</Link></li>
      <li onClick={() => setModalSkillShow(true)}><span>M</span><Link href="/">y Skills</Link></li>
      <li><span>P</span><Link href="/myProjects">rojects</Link></li>
      <li><span>C</span><Link href="https://www.cerebrumlux.com/">erebrum Lux</Link></li>
  </ul>
  </div>
  <AboutMeModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  <SkillsModal
     show={modalSkillShow}
     onHide={() => setModalSkillShow(false)}
  />
  </>
}
