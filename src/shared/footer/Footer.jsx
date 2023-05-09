import './Footer.css'
import logo from '../../assets/images/more/logo1.png'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {

    const [message, setmessage] = useState('Message')

    const handlerMessage = e => {
        console.log(e.target.value);
    }

    const handlerQuery = e => {
        e.preventDefault()
    }
    return (
        <footer className='mt-28'>
            <div className=' container mx-auto'>
                <img style={{ width: '75px', height: '90px' }} src={logo} alt="" />
                <div className='grid grid-cols-12'>
                    <div className='col-span-5'>
                        <h1 className='text-5xl text-coffee rancho drop-shadow-2xl pt-6 pb-8'>Espresso Emporium</h1>
                        <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='text-4xl text-coffee flex gap-5 py-8'>
                            <Link><button><FaFacebook></FaFacebook></button></Link>
                            <Link><button><FaTwitter></FaTwitter></button></Link>
                            <Link><button><FaInstagram></FaInstagram></button></Link>
                            <Link><button><FaLinkedin></FaLinkedin></button></Link>
                        </div>
                        <div >
                            <h3 className='text-5xl rancho'>Get in Touch</h3>
                            <div className='pb-12 pt-8 flex flex-col gap-4'>
                                <div className='flex gap-6'>
                                    <FaPhoneAlt className='text-2xl text-coffee'></FaPhoneAlt>
                                    <p className='text-xl'>01625405959</p>
                                </div>
                                <div className='flex gap-6'>
                                    <FaEnvelope className='text-2xl text-coffee'></FaEnvelope>
                                    <p className='text-xl'>jahidhowlader.info@gmail.com</p>
                                </div>
                                <div className='flex gap-6'>
                                    <FaMapMarkedAlt className='text-2xl text-coffee'></FaMapMarkedAlt>
                                    <p className='text-xl'>32 East Bashabo, Dhaka - 1214</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className='col-span-5'>
                        <h3 className='text-5xl rancho'>Connect with Us</h3>
                        <form onSubmit={handlerQuery}>
                            <input type="text" placeholder="Name" name='name' className="input w-full" />
                            <input type="text" placeholder="Email" name='email' className="input w-full" />
                            {/* <textarea type="text" placeholder='556' value="Message" minLength="100" name='email' style={{height: "130px"}} className="input w-full"> </textarea> */}
                            <input onChange={handlerMessage} type="submit" value={message} className='border-2 border-coffee py-2 px-5 rounded-full text-2xl rancho cursor-pointer' />
                        </form>

                    </div>
                </div>
            </div>
            <div id='footer' >
                <p className='text-xl rancho py-3 text-White text-center'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;