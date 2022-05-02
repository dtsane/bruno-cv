import Modal from 'react-bootstrap/Modal'
import Image from 'next/image'
import styles from '../styles/Modal.module.css'
import img1 from '../public/java.png'
import img2 from '../public/nextjs.png'
import img3 from '../public/flutter.png'
import img4 from '../public/react.png'
import img5 from '../public/solidity.png'
import img6 from '../public/csharp.png'

export default  function SkillsModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            My Skills
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Excellent communication and interpersonal skills.
          Speak French and English.
          Energetic, highly capable of working in teams and independently.
          Able to work in a multicultural atmosphere.
          Capacity to use Adobe creative cloud.
          Programing games with the Game studio, Csharp, Flutter, Eclipse, and Android Studio.
          Designing a website with Html, React, Solidity CSS, JavaScript, Wix, Node Js, Squarespace, and much more.
          Proficient in MS Office applications and programming (Excel, Word, PowerPoint…).
         </p>
         <div className={styles.imgRow}>
         <Image src={img6} alt="C Sharp" height={100} width={100}/>
         <Image src={img5} alt="Solidity" height={100} width={150}/>
         <Image src={img2} alt="NextJS" height={100} width={100}/>
         <Image src={img3} alt="Flutter" height={100} width={100}/>
         <Image src={img4} alt="React" height={100} width={100}/>
         <Image src={img1} alt="Java" height={100} width={150}/>
         </div>
        </Modal.Body>
      </Modal>
    );
  }