import React, { useState } from 'react';
import './styles/Contact.scss';
import { TbMailForward } from "react-icons/tb";
import { MdAlternateEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const templateParams = {
            to_name: 'Anurag',
            from_name: formData.email,
            message: formData.message,
            reply_to: formData.email
        };
        axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: 'service_ra3o6wp',
            template_id: 'template_mkjihgj',
            user_id: '6Cr5iRCF1CPzpQU6g',
            template_params: templateParams
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res);
            setLoading(false);
            toast.success('Message sent successfully');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                toast.error('Failed to send message');
            });
    }

    return (
        <div id="contact" className="contact">
            <div className="contact__container">
                <div className="contact__left">
                    <p className="contact__header">
                        Connect with me
                    </p>
                    <div className="contact__form-container">
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__form-group">
                                <label className="contact__label">Your Name: </label>
                                <input
                                    className="contact__input"
                                    type="text"
                                    maxLength="100"
                                    required={true}
                                    value={formData.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="contact__form-group">
                                <label className="contact__label">Your Email: </label>
                                <input
                                    className="contact__input"
                                    type="email"
                                    name="email"
                                    maxLength="100"
                                    value={formData.email}
                                    required={true}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="contact__form-group">
                                <label className="contact__label">Your Message: </label>
                                <textarea
                                    className="contact__textarea"
                                    maxLength="500"
                                    name="message"
                                    required={true}
                                    value={formData.message}
                                    rows="4"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact__submit">
                                <button
                                    className="contact__button"
                                    role="button"
                                    type="submit"
                                    disabled={loading}
                                >
                                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                    <TbMailForward className="contact__icon" size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="contact__right">
                    <div className="contact__details">
                        <p className="contact__detail">
                            <MdAlternateEmail className="contact__icon-detail" size={36} />
                            <span>anuragpatel20june@gmail.com</span>
                        </p>
                        <p className="contact__detail">
                            <IoMdCall className="contact__icon-detail" size={36} />
                            <span>+91 8090892886</span>
                        </p>
                        <p className="contact__detail">
                            <CiLocationOn className="contact__icon-detail" size={36} />
                            <span>Raebareli, Uttar Pradesh, India</span>
                        </p>
                    </div>
                    <div className='connections'>
                        <div className='connections-item'>
                            <Link to='https://github.com/anurag-2024' target="_blank" rel="noopener noreferrer">
                                <BsGithub />
                            </Link>
                        </div>
                        <div className='connections-item'>
                            <Link to='https://www.linkedin.com/in/anurag-patel-7a9a58257/' target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className='connections-item'>
                            <Link to='https://leetcode.com/u/anurag_patel2420/' target="_blank" rel="noopener noreferrer">
                                <SiLeetcode />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
