import './homepage.scss';
import HeaderSlider from '../../features/Slider/MainSlider';
import { useGetProductsQuery, useGetSingleProductQuery } from '../../app/api/apiSlice';
import { Loader } from '../../features/Spinner/Spinner';
import ProductsList from '../../features/ProductsList/ProductsList';



function HomePage() {
  const { data: products = [], isLoading, isFetching } = useGetProductsQuery(30);
  const {data: singleProduct = [], isLoading: isProductLoading, isFetching: isProductFetching} = useGetSingleProductQuery;

  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider/>
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>Наши товары</h3>
              </div>
                {isFetching || isLoading ? <Loader/> : 
                   <ProductsList products={products.products}/>
                  }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage