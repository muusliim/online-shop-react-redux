import './homepage.scss';
import HeaderSlider from '../../features/Slider/MainSlider';
import { useGetProductsQuery, useGetSingleProductQuery } from '../../app/api/apiSlice';
import { Loader } from '../../features/Spinner/Spinner';
import ProductsList from '../../features/ProductsList/ProductsList';



function HomePage() {
  const { data: products = [], isLoading, isFetching } = useGetProductsQuery(30);
  const {data: singleProduct = [], isLoading: isProductLoading, isFetching: isProductFetching} = useGetSingleProductQuery;

  const rndProducts = [];

  console.log(products?.products?.length);

  // if(products.products.length > 0) {
  //   products.products.map((_, i) => {
  //     let randomIndex = Math.floor(Math.random() * products.products.length);
  //     rndProducts[i] = products[randomIndex]
  //   })      
  // }

  console.log(rndProducts);
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