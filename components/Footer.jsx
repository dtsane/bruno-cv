
import styles from "../styles/Footer.module.css"
import Image from 'next/image'
import imgInsta from '../public/insta.png'
import imgLinkin from '../public/linkin.png'
import imgTweet from '../public/twitter.png'
import imgGit from '../public/whitGit.png'

export default function Footer(){


   /* const handleEmail = async (e) => {
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

    }*/

    return <>
        <footer className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.mail}>
            <h1 id="contactForm">Contact Form</h1>
            <form name="contact" method="POST" action="/">
      <input type="hidden" name="form-name" value="contact" />
      <p>
<input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" required />
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" pattern="[^ @]*@[^ @]*" placeholder="Enter your email" className='form-control' required />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourmessage" placeholder="Enter your message"required rows="4"></textarea>
      </p>
      <p> <div data-netlify-recaptcha="true"></div></p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
        </div>
        <div className={styles.contacts}>
            <a href="https://www.instagram.com/bruno_thecreator/"> <Image src={imgInsta} alt="Insta" width={100} height={100}/></a>
            <a href="https://www.linkedin.com/in/bruno-tsane-0b255922a/"> <Image src={imgLinkin} alt="Linkin" width={100} height={100}/></a>
            <a href="https://github.com/dtsane"> <Image src={imgGit} alt="Git" width={100} height={100}/></a>
            <a href="https://twitter.com/bruno_tsane"> <Image src={imgTweet} alt="Tweeter" width={100} height={100}/></a>
        </div>
        </div>
    <p>
        &copy; Created by Bruno Tsane | Founder Cerbrum Lux | Using Nextjs
    </p>
    </footer>
    </>
}
