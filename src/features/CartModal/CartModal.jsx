import './cartModal.scss';
import { shopping_cart } from '../../utils/img';
import price from '../../utils/price';
import { Link } from 'react-router-dom';


function CartModal({cart}) {
    console.log(cart);
  return (
    <div className="cart-modal">
        <h5 className="cart-modal-title fw-6 fs-14 font-manrope text-center text-capitalize">
            Добавленные товары
            <div className='cart-modal-cnt-bottom'></div>
            {
            cart?.length > 0 ? 
            (
                <div className='cart-modal-list grid'>
                    {
                        cart.map(item => {
                            return (
                                <div className="cart-modal-item grid align-center font-manrope py-2" 
                                key={item.id}>
                                    <div className="cart-modal-item-img">
                                        <img src={item?.thumbnail} 
                                            alt="item_thumbnail"
                                            className='img-cover' />
                                    </div>
                                    <div className="cart-modal-item-title fs-13 font-manrope text-capitalize">
                                        {item?.title}
                                    </div>
                                    <div className="cart-modal-item-price text-orange fs-14">
                                        {price(item?.discountedPrice)}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Link to='/cart' className="view-cart-btn 
                                        bg-orange fs-15 font-manrope 
                                        text-center text-whitesmoke
                                        text-uppercase">
                        Перейти в корзину
                    </Link>
                </div>) : 
            (
                <div className="flex flex-column align-center justify-center cart-modal-empty">
                    <img src={shopping_cart} alt="shopping_cart" />
                    <h6 className='text-dark fw-4'>Нет товаров</h6>
                </div>
            )
            }
        </h5>
    </div>
  )
}

export default CartModal