import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {

    const coffee = useLoaderData()

    const { name, photo, quantity, price, supplier, taste, category, details } = coffee

    return (
        <>
            <section>
                <div className='container mx-auto py-12'>
                    <Link to='/'>
                        <span className='hover:bg-btn-clr hover:py-3 hover:rounded hover:pr-2'>
                            <button>
                                <FaArrowLeft></FaArrowLeft>
                            </button>
                            <p className='inline rancho text-3xl ml-4 drop-shadow-lg '>Back to home</p>
                        </span>
                    </Link>

                    <div className='bg-add-coffee mt-12 rounded'>
                        <div className='flex items-center justify-center gap-28 py-20'>
                            <img style={{ width: '351px', height: '455px' }} src={photo} alt={name} />
                            <div>
                                <h4 className='rancho text-4xl text-coffee'>Niceties</h4>

                                <div className='space-y-2 pt-8'>
                                    <p><span className='font-semibold'>Name: </span>{name}</p>
                                    <p><span className='font-semibold'>Available Quantity: </span>{quantity}</p>
                                    <p><span className='font-semibold'>Supplier: </span>{supplier}</p>
                                    <p><span className='font-semibold'>Taste: </span>{taste}</p>
                                    <p><span className='font-semibold'>Category: </span>{category}</p>
                                    <p><span className='font-semibold'>Details: </span>{details}</p>
                                    <p><span className='font-semibold'>Price: </span>{price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewCoffee;