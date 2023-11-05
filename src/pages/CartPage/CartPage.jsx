import './cartPage.scss';
import { shopping_cart } from "../../utils/img"
import { Link } from "react-router-dom"
import price from '../../utils/price';
import { removeItemFromCart, clearCart, getCartTotal, toggleCartQty, getCartSelector, getCartItemsCount } from '../../app/store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';


function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector(getCartSelector);
    const { itemsCount, totalAmount} = useSelector((state) => state.cart);

    if(cart.length === 0) {
        return (
            <div className="container my-5">
                <div className="empty-cart flex justify-center align-center flex-column font-manrope">
                    <img src={shopping_cart} alt="shoppingCart" />
                    <span className="fw-6 fs-15 text-gray">Ваша корзина пуста</span>
                    <Link to='/' className='shopping-btn bg-orange text-white fw-5'>Вернуться в магазин</Link>
                </div>
            </div>
        )
    }

    const text = ['№', 'Наименование товара', 'Цена', 'Количество', 'Итого', ];

  return (
    <div className="cart bg-whitesmoke">
        <div className="container">
            <div className="cart-ctable">
                <div className="cart-chead bg-white">
                    <div className="cart-ctr fw-6 font-manrope fs-15">
                        {text.map((item) => {
                            return (
                                <div className='cart-cth'
                                    key = {item}>
                                    <span className='cart-ctxt'>{item}</span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="cart-cbody bg-white">
                        {
                            cart?.map((item, i) => {
                                return (
                                    <div className="cart-ctr py-4" key={item?.id}>
                                        <div className="cart-ctd">
                                            <span className="cart-ctxt">
                                                {i + 1}
                                            </span>
                                        </div>
                                        <div className="cart-ctd">
                                            <img src={item?.thumbnail} alt="" />
                                            <span className="cart-ctxt">
                                                {item?.title}
                                            </span>
                                        </div>
                                        <div className="cart-ctd">
                                            <span className="cart-ctxt">
                                                {price(item?.discountedPrice)}
                                            </span>
                                        </div>
                                        <div className="cart-ctd">
                                            <div className="qty-change flex align-center">

                                               <button type='button' 
                                               className='qty-decrease flex justify-center align-center'
                                               onClick={() => dispatch(toggleCartQty({id:item?.id, type:'DEC'}))}
                                               >
                                                <i className='fas fa-minus'></i>
                                                </button> 

                                                <div 
                                                    className="qty-value flex align-center justify-center">
                                                    {item?.quantity}
                                                </div>

                                                <button type='button' 
                                                className='qty-increase flex justify-center align-center'
                                                onClick={() => dispatch(toggleCartQty({id:item?.id, type:'INC'}))}
                                                >
                                                    <i className='fas fa-plus'></i>
                                                </button> 
                                            </div>
                                        </div>
                                        <div className="cart-ctd">
                                            <span className="cart-ctxt text-orange">
                                                {price(item?.totalPrice)}
                                            </span>
                                        </div>
                                        <div className="cart-ctd">
                                            <button 
                                                type='button' 
                                                className='delete-btn text-dark'
                                                onClick={() => dispatch(removeItemFromCart(item?.id))}
                                            >
                                                <i className="fa-solid fa-trash fs-"></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage