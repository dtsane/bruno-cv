import Modal from 'react-bootstrap/Modal'
import styles from '../styles/Modal.module.css'
import Image from 'next/image'
import imgSmile from '../public/imgSmile.jpg'

export default function AboutMeModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            About me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className={styles.modal}>
          <Image src={imgSmile} alt="Smiling handsome man"/>
          <p>
            Hey, my name is Bruno Tsane,
             I am 22 years old and I am a young entrepreneur
             who is fascinated by Computer Sciences.
             I am the founder of the company Cerebrum Lux. I graduated from 
             college La cite Collégiale. I have a lot of hobies such as ,Gardening, involved in environmental clubs, watching movies, 
            reading, dancing, playing African drums, cooking, photography, surfing the internet, traveling.

          </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }