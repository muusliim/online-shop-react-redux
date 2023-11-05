import './cartPage.scss';
import { shopping_cart } from "../../utils/img"
import { Link } from "react-router-dom"
import price from '../../utils/price';
import { removeItemFromCart, clearCart, getCartTotal, toggleCartQty, getCartSelector, getCartItemsCount } from '../../app/store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';


function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector(getCartSelector);
    const {itemsCount, totalAmount} = useSelector(state => state.cart);

    if(cart.length === 0) {
        return (
            <div className="container my-5">
                <div className="empty-cat flex justify-center align-center flex-column font-manrope">
                    <img src={shopping_cart} alt="shoppingCart" />
                    <span className="fw-6 fs-15 text-gray">Ваша корзина пуста</span>
                    <Link to='/' className='shopping-btn bg-orange text-white fw-5'>Вернуться в магазин</Link>
                </div>
            </div>
        )
    }

    const text = ['№', 'Наименование товара', 'Цена', 'Количество', 'Сумма', 'Действия'];

  return (
    <div className="cart bg-whitesmoke">
        <div className="container">
            <div className="cart-ctable">
                <div className="cart-chead bg-white">
                    <div className="cart-ctr fw-6 font-manrope fs-15">
                        {text.map(item => {
                            return (
                                <div className='cart-cth'>
                                    <span className='cart-ctxt'>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage