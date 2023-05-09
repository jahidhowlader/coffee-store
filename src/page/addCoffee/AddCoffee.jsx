import './AddCoffee.css'
import { FaArrowLeft } from "react-icons/fa";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handlerAddCofee = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const price = form.price.value
        const addCoffee = { name, quantity, supplier, taste, category, details, photo, price }

        fetch('http://localhost:5000/add-coffee', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addCoffee)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'successfully added new coffee..',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                console.log(data);
            }
        })

        // console.log(addCoffee);

    }


    return (
        <section id='add-cofee-bg'>
            <div className='container mx-auto py-12'>
                <div>
                    <button>
                        <FaArrowLeft></FaArrowLeft>
                    </button>
                    <p className='inline rancho text-3xl ml-4 drop-shadow-lg'>Back to home</p>
                </div>

                <div className='my-12 px-28 bg-add-coffee rounded'>
                    <div className='grid grid-cols-12'>
                        <div></div>
                        <div className='text-center col-span-10'>
                            <h2 className='rancho text-5xl pt-20 pb-8 '>Add New Coffee</h2>
                            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                    </div>

                    <div className='pt-8 pb-12'>
                        <form onSubmit={handlerAddCofee}>
                            {/* Row of Name and Chef */}
                            <div className='flex gap-x-6 mb-6'>
                                <div className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Name</label>
                                    <input type="text" placeholder="Enter coffee name" name='name' className="input w-full" />
                                </div>
                                <div className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Available Quantitiy</label>
                                    <input type="text" placeholder="Enter coffee quantitiy" name='quantity' className="input w-full" />
                                </div>
                            </div>

                            {/* Row of Supplier and Taste */}
                            <div className='flex gap-x-6 mb-6'>
                                <div className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Supplier</label>
                                    <input type="text" placeholder="Enter coffee supplier" name='supplier' className="input w-full" />
                                </div>
                                <div className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Taste</label>
                                    <input type="text" placeholder="Enter coffee taste" name='taste' className="input w-full" />
                                </div>
                            </div>

                            {/* Row of Category and Details */}
                            <div className='flex gap-x-6 mb-6'>
                                <div className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Category</label>
                                    <input type="text" placeholder="Enter coffee category" name='category' className="input w-full" />
                                </div>
                                <div className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Details</label>
                                    <input type="text" placeholder="Enter coffee details" name='details' className="input w-full" />
                                </div>
                            </div>
                            {/* Row of Photo */}
                            <div className='flex gap-x-6 mb-6'>
                                <div  className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Photo</label>
                                    <input type="text" placeholder="Enter photo URL" name='photo' className="input w-full" />
                                </div>
                                <div  className='w-1/2'>
                                    <label className='pb-4 block font-bold'>Price</label>
                                    <input type="text" placeholder="Enter coffee price" name='price' className="input w-full" />
                                </div>
                            </div>

                            <input type="submit" value="Add Coffee" className='bg-btn-clr w-full py-3 rancho text-2xl font-semibold cursor-pointer rounded' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCoffee;