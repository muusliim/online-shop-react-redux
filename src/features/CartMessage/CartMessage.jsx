import './cartMessage.scss';
import { done } from '../../utils/img';

function CartMessage() {
  return (
    <div className="cart-message text-center">
        <div className="cart-message-icon">
             <img src={done} alt="cartMessage" />
        </div>
        <h5 className='text-white fs-14 fw-5'>Товар добавлен в корзину!</h5>
    </div>
  )
}

export default CartMessage