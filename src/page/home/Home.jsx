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

const Home = () => {

    const categoryCoffee = useLoaderData()
    console.log(categoryCoffee);

    return (
        <>
            <section id='home-bg'>
                <div className='grid grid-cols-2 container mx-auto'>
                    <span></span>
                    <div className='flex items-center h-[800px]'>
                        <div>
                            <div className='text-White'>
                                <h1 className='text-6xl rancho'>Would you like a Cup of Delicious Coffee?</h1>
                                <p className='pt-4 pb-8 font-light text-xl'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                                <button className='text-2xl rancho px-5 py-2 bg-btn-clrgit init text-black font-semibold'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-icon-bg py-9'>
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

            <section className='py-28 relative'>
                <img className='absolute' src={leftbg} alt="" />
                <img className='absolute right-0 bottom-0' src={rightbg} alt="" />
                <div className='text-center'>
                    <small>--- Sip & Savor ---</small>
                    <h3 className='text-6xl text-coffee rancho pt-2 pb-5'>Our Popular Products</h3>
                    <Link to="">
                        <button className='rancho bg-btn-clr border-2 px-5 py-2 border-coffee text-2xl rounded text-White '>Add Coffee <FaCoffee className='inline ml-1 text-coffee'></FaCoffee></button>
                    </Link>
                </div>

                <div className='mt-12 container mx-auto '>
                    <div className='grid grid-cols-2 gap-6 mx-40'>
                        {
                            categoryCoffee.map(coffee => <Card
                                key={coffee._id}
                                coffee={coffee}
                            ></Card>)
                        }
                    </div>
                </div>
            </section>

            {/* Follow on Instagram */}
            <section>
                <div className='text-center'>
                    <small>Follow Us Now</small>
                    <h1 className='text-6xl rancho text-coffee pt-2'>Follow on Instagram</h1>
                    
                    <div className='grid grid-cols-4 gap-6 rounded container mx-auto'>
                    <img style={{width: '100%'}} src={cup1} alt="cup1" />
                    <img style={{width: '100%'}} src={cup2} alt="cup2" />
                    <img style={{width: '100%'}} src={cup3} alt="cup3" />
                    <img style={{width: '100%'}} src={cup4} alt="cup4" />
                    <img style={{width: '100%'}} src={cup5} alt="cup5" />
                    <img style={{width: '100%'}} src={cup6} alt="cup6" />
                    <img style={{width: '100%'}} src={cup7} alt="cup7" />
                    <img style={{width: '100%'}} src={cup8} alt="cup8" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;