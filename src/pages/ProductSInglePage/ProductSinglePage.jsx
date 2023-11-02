import './productSinglePage.scss';
import { useParams } from 'react-router-dom';
import { Loader } from '../../features/Spinner/Spinner';
import price from '../../utils/price';
import { useGetSingleProductQuery } from '../../app/api/apiSlice';


function ProductSinglePage() {
    
    const {id} = useParams();
    const {data: product = [], isFetching, isLoading} = useGetSingleProductQuery(id);

    let discountedPrice = (product?.price) - (product?.price * (product?.discountedPercentage / 100));
    if (isLoading || isFetching) {
        return <Loader/>
    }

  return (
    <main className='py-5 bg-whitesmoke'>
        <div className="product-single">
            <div className="container">
                <div className="product-single-l">
                    <div className="product-img">
                        <div className="product-img-zoom">
                            <img src={product && product.images ? product.images[0] : ''} 
                                 alt={product.title} />
                        </div>
                        <div className="product-img-thumbs flex align-center my-2">
                            {product?.images.slice(0,3).map(image => {
                                return (
                                    <div key={image} className="thumb-item">
                                        <img className='img-cover' src={product && product.images ? image : ''} 
                                        alt={product.title} />
                                    </div>
                                )
                            })}
                        </div>

                        <div className="product-single-r">
                            <div className="product-details font-manrope">
                                <div className="title fs-20 fw-5">
                                    {product?.title}
                                </div>
                                <p className='para fw-3 fs-15'>
                                    {product?.description}
                                </p>
                            </div>
                        
                        <div className="info flex align-center flex-wrap fs-14">
                            <div className="rating">
                                <span className="text-orange fw-5">
                                    Рейтинг:</span>
                                <span className='mx-1'>{product?.rating}</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ProductSinglePage