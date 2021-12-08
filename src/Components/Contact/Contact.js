import React from 'react';
import './Contact.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    return (
        <section>
            <div className="container">
                <div className="contact_info">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><LocationOnOutlinedIcon sx={{ fontSize: 50 , maxWidth: '100%'}} /></span>
                            <span>No; 04, Negombo Road<br/>
                            Dankotuwa<br/>
                            Sri Lanka</span>
                        </li>
                        <li>
                            <span><EmailOutlinedIcon color="white" sx={{ fontSize: 50 , maxWidth: '100%' }} /></span>
                            <span>sarojenijewellers@gmail.com</span>
                        </li>
                        <li>
                            <span><LocalPhoneOutlinedIcon sx={{ fontSize: 50 , maxWidth: '100%' }} /></span>
                            <span>+94 777 286 335</span>
                        </li>
                    </ul>
                    <ul className="social">
                    <li><a href="#"><span><FacebookIcon /></span></a></li>
                    <li><a href="#"><span><InstagramIcon /></span></a></li>
                    <li><a href="#"><span><TwitterIcon /></span></a></li>
                    <li><a href="#"><span><LinkedInIcon /></span></a></li>
                </ul>
                </div>
                <div className="contact_form">
                    <h2>Send us a message</h2>
                    <div className="formContainer">
                        <div className="inputbox w50">
                            <input type="text" required />
                            <span>First Name</span>
                        </div>
                        <div className="inputbox w50">
                            <input type="text" required />
                            <span>Last Name</span>
                        </div>
                        <div className="inputbox w50">
                            <input type="email" required />
                            <span>E-mail</span>
                        </div>
                        <div className="inputbox w50">
                            <input type="text" required />
                            <span>Phone Number</span>
                        </div>
                        <div className="inputbox w100">
                            <textarea required></textarea>
                            <span>Write your message here ... </span>
                        </div>
                        <div className="submitBtn">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
