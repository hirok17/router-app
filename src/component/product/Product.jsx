import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    const {id, thumbnail, title, price, brand} =product;
    return (
        <div className='shadow-lg rounded-xl p-8 space-y-3'>
           <img className='w-full h-[200px]' src={thumbnail} alt="" />
           <h3 className='text-center text-lg'>{brand}</h3>
           <h2 className='text-2xl text-[#111827]'>{title}</h2>
           <div className='flex justify-between items-center'>
            <h3 className='text-2xl text-[#111827]'>$ {price.toFixed(2)}</h3>
            <Link to={`/cart/${id}`}><button className='bg-[#1E40AF] text-white px-5 py-3 rounded-lg'>View Details</button></Link>
           </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
  };
export default Product;