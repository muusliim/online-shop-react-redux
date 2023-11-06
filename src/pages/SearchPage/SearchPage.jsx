import './searchPage.scss';
import { useParams } from 'react-router';
import ProductsList from '../../features/ProductsList/ProductsList';
import { useGetProductsBySearchQuery } from '../../app/api/apiSlice';
import { Loader } from '../../features/Spinner/Spinner';


function SearchPage() {

    const {searchTerm} = useParams();


    const {data: searchProducts=[], isLoading, isFetching} = useGetProductsBySearchQuery(searchTerm);

    const SearchList = () => {
        if (isFetching || isLoading) {
            return <Loader/>
        } else if (searchProducts?.products?.length === 0) {
            return (
            <div style={{minHeight: '70vh'}} className="container">
                <div className="fw-5 text-danger py-5">
                    <h1 className='text-uppercase'> Ничего не найдено </h1>
                </div>
            </div>

            )
        } else {
            return  <ProductsList products={searchProducts.products} /> 
        }      
    }

  return (
    <main>
        <div className="search-content bg-whitesmoke">
            <div className="container">
                <div className="py-5">
                    <div className="title-md">
                        <h3>Найденные товары:</h3>
                    </div>
                    {<SearchList/>}                  
                </div>
            </div>
        </div>
    </main>
  )
}

export default SearchPage