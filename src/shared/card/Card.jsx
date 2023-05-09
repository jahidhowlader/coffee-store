import { FaEye, FaTrash, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Card = ({ coffee, categoryCoffee, seTotalCoffee }) => {

    const { _id, name, photo, quantity, price } = coffee

    const handlerDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/delete-coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })


    }

    return (
        <div className='flex justify-between items-center bg-card-bg rounded-lg p-8'>
            <img src={photo} alt="" />
            <div>
                <p><span className='font-semibold'>Name: </span>{name}</p>
                <p><span className='font-semibold'>Avilable Quantity: </span>{quantity}</p>
                <p><span className='font-semibold'>Price: </span>{price}</p>
            </div>
            <div className='text-White space-y-4 ml-12 z-20'>
                <Link to={`/coffee/${_id}`}>
                    <FaEye className='bg-btn-clr text-xl w-10 h-10 p-2.5 rounded cursor-pointer'></FaEye>
                </Link>
                <FaUserEdit className='bg-black text-xl w-10 h-10 p-2.5 rounded cursor-pointer'></FaUserEdit>
                <FaTrash onClick={() => handlerDelete(_id)} className='bg-red text-xl w-10 h-10 p-2.5 rounded cursor-pointer hover:bg-opacity-90'></FaTrash>
            </div>
        </div>
    );
};

export default Card;