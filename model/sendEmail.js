import { emailjs } from "emailjs-com";


export  const sendEmail = (name,email,message) =>{


    var data = {
        service_id: 'service_ldvuy0i',
        template_id: 'template_hzfsl3r',
        user_id: 'DSa-nJXJkMyncUACi',
        template_params: {
            'name': name,
            'email':email,
            'message':message
        }
    };
     
    emailjs.send('service_ldvuy0i', 'template_hzfsl3r', data)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
   
    console.log('Name: '+ name);
    console.log('email: '+ email);
    console.log('message: '+ message);

}