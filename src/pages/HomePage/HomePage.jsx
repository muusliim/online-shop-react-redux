import './homepage.scss';
import HeaderSlider from '../../features/Slider/MainSlider';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../app/api/apiSlice';
import { Loader } from '../../features/Spinner/Spinner';
import ProductsList from '../../features/ProductsList/ProductsList';



function HomePage() {
  const { data: products = [], isLoading, isFetching } = useGetProductsQuery(50);
  const {data:categories = []} = useGetCategoriesQuery();

  //ramdomizer
  let rndProducts = [];
  if (products?.products?.length > 0) {
    for (let i in products?.products) {
      let randomIndex = Math.floor(Math.random() * products?.products?.length);
      while (rndProducts.includes(products?.products[randomIndex])){
        randomIndex = Math.floor(Math.random() * products?.products?.length)
      }
      rndProducts[i] = products?.products[randomIndex]
    }
  }
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
                   <ProductsList products={rndProducts}/>
                  }
            </div>
            
            {categories.slice(0, 4).map(category => {
             return (
                <div className="categories-item" key={category.name}>
                <div className="title-md" >
                  <h3>{category.name}</h3>
                </div>
                  {isFetching || isLoading ? <Loader/> : 
                     <ProductsList products={products?.products.filter(product => product.category === category?.slug)}/>
                    }
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage