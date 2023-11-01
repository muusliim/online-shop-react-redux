import './product.scss';
import { Link } from 'react-router-dom';
import price from '../../utils/price';

function Product({product}) {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
        <div className='product-item bg-white'>
            <div className="category">{product?.category}</div>
            <div className="product-item-img">
                <img src={product?.images[0]} alt={product.title} className="img-cover" />
            </div>
            <div className="product-item-info fs-14">
                <div className="brand">
                    <span>Brand: </span>
                    <span className='fw-7'>{product?.brand}</span>
                </div>
                <div className="title py-2">
                    {product?.title}
                </div>
                <div className="price flex align-center justify-center">
                    <span className="old-price">
                        {price(product?.price)}
                    </span>
                    <span className="new-price">
                        {price(product?.discount)}
                    </span>
                    <div className="discount fw-6">
                        ({product?.discountedPercentage}% OFF)
                    </div>
                </div>
            </div>
        </div>

    </Link>
  )
}

export default Product