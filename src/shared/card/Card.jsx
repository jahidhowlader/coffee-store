import { FaEye, FaTrash, FaUserEdit } from "react-icons/fa";

const Card = ({coffee}) => {

    const {name, photo, quantity, price} = coffee

    return (
        <div className='flex justify-between items-center bg-card-bg rounded-lg p-8'>
                            <img src={photo} alt="" />
                            <div>
                                <p><span className='font-semibold'>Name: </span>{name}</p>
                                <p><span className='font-semibold'>Avilable Quantity: </span>{quantity}</p>
                                <p><span className='font-semibold'>Price: </span>{price}</p>
                            </div>
                            <div className='text-White space-y-4 ml-12'>
                                <FaEye className='bg-btn-clr text-xl w-10 h-10 p-2.5 rounded'></FaEye>
                                <FaUserEdit  className='bg-black text-xl w-10 h-10 p-2.5 rounded'></FaUserEdit>
                                <FaTrash  className='bg-red text-xl w-10 h-10 p-2.5 rounded'></FaTrash>
                            </div>
                        </div>
    );
};

export default Card;