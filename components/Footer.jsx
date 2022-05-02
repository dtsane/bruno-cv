
import styles from "../styles/Footer.module.css"
import Image from 'next/image'
import imgInsta from '../public/insta.png'
import imgLinkin from '../public/linkin.png'
import imgTweet from '../public/twitter.png'
import imgGit from '../public/whitGit.png'

export default function Footer(){


    const handleEmail = async (e) => {
        e.preventDefault();

        let inputName = document.getElementById('name');
        // On va chercher le nom dans le input
        let inputEmail = document.getElementById('user_email');
        let inputMessage = document.getElementById('message');
       
        var data = { 
            name: inputName.value,
            email: inputEmail.value,
            message: inputMessage.value
        };

        // On envoit les données au serveur
        let resp = await fetch('/api/emailApi', { 
             method: 'POST',
             headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
       });

       if(resp.ok)
       {
           alert('Your message was send succesfully! ');
       }

    }

    return <>
        <footer className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.mail}>
            <h1 id="contactForm">Contact Form</h1>
            <form id='emailForm' onSubmit={handleEmail}>
                <label>Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" required className='form-control'/>
                <label>Email</label>
                <input type="text" name="user_email" id="user_email" pattern="[^ @]*@[^ @]*" placeholder="Enter your email" className='form-control' required />
                <label>Message</label>
                <textarea name="message" rows="4" id="message" className='form-control' placeholder="Enter your message"required />
                <input type="submit" value="Send"/>
            </form>
        </div>
        <div className={styles.contacts}>
            <Image src={imgInsta} alt="Insta" width={100} height={100}/>
            <Image src={imgLinkin} alt="Linkin" width={100} height={100}/>
            <Image src={imgGit} alt="Git" width={100} height={100}/>
            <Image src={imgTweet} alt="Tweeter" width={100} height={100}/>
        </div>
        </div>
    <p>
        &copy; Created by Bruno Tsane | Founder Cerbrum Lux | Using Nextjs
    </p>
    </footer>
    </>
}