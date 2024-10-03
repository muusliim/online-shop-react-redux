import './categoryProductPage.scss';
import ProductsList from '../../features/ProductsList/ProductsList';
import { useParams } from 'react-router';
import { useGetProductsByCategoryQuery } from '../../app/api/apiSlice';
import { Loader } from '../../features/Spinner/Spinner';

function CategoryProductPage() {
    const {category} = useParams();
    console.log(category);
    const {data: products = [], isLoading, isFetching} = useGetProductsByCategoryQuery(category);
    console.log(products);

  return (
    <div className="cat-products py-5 bg-whitesmoke">
        <div className="container">
            <div className="cat-products-content">
                <div className="title-md">
                    <h3>Категория <span className='text-capitalize fw-7'>{category.replace('-', ' ')}</span></h3>
                </div>

                {isLoading || isFetching ? <Loader/> : 
                    <ProductsList products={products?.products}/> 
                }
            </div>
        </div>
    </div>
  )
}

export default CategoryProductPage