import './productsList.scss';
import Product from '../Product/Product';

function ProductsList({products}) {
  console.log(products);
  return (
    <div className="product-lists grid bg-whitesmoke my-3">
        {
          products.map(product => {
            let discount = (product.price) - (product.price * (product.discountPercentage) / 100)

            return (
              <Product key={product.id} product={{...product, discount}} />
              
            )
          })

        }
    </div>
  )
}

export default ProductsList