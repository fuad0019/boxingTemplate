// src/services/mailService.ts
import axios from 'axios';

interface MailData {
    from: string, 
    to: string, 
    name: string, 
    message: string, 
    subject: string 
    
}

const sendMail = async (mailData: MailData): Promise<any> => {
    const url = 'http://85.190.240.93:3000/send-email';
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // Include other necessary headers like authorization tokens here
        }
    };

    try {
        const response = await axios.post(url, mailData, config);
        console.log('Email sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to send email:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export default sendMail;
