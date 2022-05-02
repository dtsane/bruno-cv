import {sendEmail} from "../../model/sendEmail";

export default function handler(request, response){
    
    if (request.method === 'POST'){
        //sommething
        sendEmail(request.body.name, request.body.email, request.body.message);
        response.status(200).end();
    }
}