import './Home.css'
import coffee from '../../assets/images/icons/coffee.png'
import award from '../../assets/images/icons/award.png'
import grade from '../../assets/images/icons/grade.png'
import shake from '../../assets/images/icons/shake.png'
import { Link, useLoaderData } from 'react-router-dom'
import { FaCoffee } from 'react-icons/fa'
import leftbg from '../../assets/images/more/home-left-bg.png'
import rightbg from '../../assets/images/more/home-right-bg.png'
import Card from '../../shared/card/Card'
import cup1 from '../../assets/images/cups/Rectangle 9.png'
import cup2 from '../../assets/images/cups/Rectangle 10.png'
import cup3 from '../../assets/images/cups/Rectangle 11.png'
import cup4 from '../../assets/images/cups/Rectangle 12.png'
import cup5 from '../../assets/images/cups/Rectangle 13.png'
import cup6 from '../../assets/images/cups/Rectangle 14.png'
import cup7 from '../../assets/images/cups/Rectangle 15.png'
import cup8 from '../../assets/images/cups/Rectangle 16.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from 'react'

AOS.init();

const Home = () => {

    const totalCoffee = useLoaderData()
    const [remaining, setRemaining] = useState(totalCoffee)

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => setRemaining(data))
    }, [remaining])

    return (
        <>
            <section id='home-bg' data-aos="fade-down"
                data-aos-duration="1000">
                <div className='grid grid-cols-2 container mx-auto'>
                    <span></span>
                    <div className='flex items-center h-[800px]'>
                        <div>
                            <div className='text-White'>
                                <h1 className='text-6xl rancho'>Would you like a Cup of Delicious Coffee?</h1>
                                <p className='pt-4 pb-8 font-light text-xl'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                                <button className='text-2xl rancho px-5 py-2 bg-btn-clr text-black font-semibold hover:bg-transparent hover:text-White hover:border-2'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section data-aos="fade-up"
                data-aos-duration="1000" className='bg-icon-bg py-9'>
                <div className='grid grid-cols-4 container mx-auto gap-10'>
                    <div>
                        <img src={coffee} alt="" />
                        <h3 className='text-4xl rancho pb-2 pt-4'>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={award} alt="" />
                        <h3 className='text-4xl rancho pb-2 pt-4'>High Quality</h3>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img src={grade} alt="" />
                        <h3 className='text-4xl rancho pb-2 pt-4'>Pure Grades</h3>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img src={shake} alt="" />
                        <h3 className='text-4xl rancho pb-2 pt-4'>Proper Roasting</h3>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </section>

            {/* Our Popular Products Section */}
            <section data-aos="fade-down"
                data-aos-duration="1000" className='py-28 relative'>
                <img className='absolute z-0' src={leftbg} alt="" />
                <img className='absolute right-0 bottom-0 z-0' src={rightbg} alt="" />
                <div className='text-center'>
                    <small>--- Sip & Savor ---</small>
                    <h3 className='text-6xl text-coffee rancho pt-2 pb-5'>Our Popular Products</h3>
                    <Link to="/add-coffee">
                        <button className='rancho bg-btn-clr border-2 px-5 py-2 border-coffee text-2xl rounded text-White hover:bg-transparent'>Add Coffee <FaCoffee className='inline ml-1 text-coffee'></FaCoffee></button>
                    </Link>
                </div>

                <div className='mt-12 container mx-auto '>
                    <div className='grid grid-cols-2 gap-6 mx-40'>
                        {
                            remaining.map(coffee => <Card
                                key={coffee._id}
                                coffee={coffee}
                            ></Card>)
                        }
                    </div>
                </div>
            </section>

            {/* Follow on Instagram */}
            <section data-aos="fade-up"
                data-aos-duration="1000">
                <div className='text-center'>
                    <small>Follow Us Now</small>
                    <h1 className='text-6xl rancho text-coffee pt-2'>Follow on Instagram</h1>

                    <div className='grid grid-cols-4 gap-6 rounded container mx-auto mt-12'>
                        <img style={{ width: '100%' }} src={cup1} alt="cup1" />
                        <img style={{ width: '100%' }} src={cup2} alt="cup2" />
                        <img style={{ width: '100%' }} src={cup3} alt="cup3" />
                        <img style={{ width: '100%' }} src={cup4} alt="cup4" />
                        <img style={{ width: '100%' }} src={cup5} alt="cup5" />
                        <img style={{ width: '100%' }} src={cup6} alt="cup6" />
                        <img style={{ width: '100%' }} src={cup7} alt="cup7" />
                        <img style={{ width: '100%' }} src={cup8} alt="cup8" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;