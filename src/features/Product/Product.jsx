import './product.scss';
import { Link } from 'react-router-dom';
import price from '../../utils/price';

function Product({product}) {
  return (
    <Link to={`/product/${product?.id}`} key={product.id}/>
  )
}

export default Product