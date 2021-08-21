import React from 'react';
import emailjs from 'emailjs-com';

import { ContactContainer, EmailFormContainer, EmailColumnList, Input, TextArea,
    Name, Email, Subject, Message } from './ContactStyle';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


import MapBox from './MapBox';
import Button from '../../styles/GlobalComponents/Button';

function Contact() {
    //!* https://dashboard.emailjs.com/admin
    const SERVICE_ID = 'service_csn3dh8';
    const TEMPLATE_ID = 'template_680hsgm';
    const USER_ID = 'user_u2jmiThwG9syeEwZsLvWp';

    const notifyUserEmailSent = () => {
        console.log('notifyUserEmailSent');
    }

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }).then(e.target.reset())
        .then(notifyUserEmailSent());
    }

    return (
        <Section id="contact">
            <SectionDivider/>
            <SectionTitle main>How To Reach Me</SectionTitle>
            {/* 지도, Contact flex row, 반응형으로 하려면 결국 새로 만들어야 함*/}
            <ContactContainer>
                <MapBox/>
                <EmailFormContainer>
                    <form onSubmit={sendEmail}>
                        <EmailColumnList>
                                <Input type='text' placeholder='Your Name' name='name'/>
                                <Input type='email' placeholder='Your Email Address' name='email'/>
                                <Input type='text' placeholder='Title' name='subject'/>
                                <TextArea placeholder='Your Message' name='message' cols="30" rows="8"/>
                                <Button>Send</Button>
                        </EmailColumnList>
                    </form>
                </EmailFormContainer>
            </ContactContainer>
        </Section>
    )
}

export default Contact


/* EmailJS, 확인메세지 */