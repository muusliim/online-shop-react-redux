import './navbar.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOn } from '../../../app/store/sidebar-slice';
import { useGetCategoriesQuery } from '../../../app/api/apiSlice';
import { SpinnerIcon } from '../../Spinner/Spinner';
import { getCartItemsCount, getCartSelector, getCartTotal } from '../../../app/store/cart-slice';
import { useEffect } from 'react';
import CartModal from '../../CartModal/CartModal';
import { getSearchTerm, setSearchTerm } from '../../../app/store/search-slice';


function Navbar() {
    const dispatch = useDispatch();

    const cart = useSelector(getCartSelector);
    const itemsCount = useSelector(getCartItemsCount);
    const searchTerm = useSelector(getSearchTerm);

    const handleSearchTerm = (e) => {
        e.preventDefault();

        dispatch(setSearchTerm(e.target.value));
    }

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, cart])

    const {data: categories = [], isFetching, isLoading} = useGetCategoriesQuery();
        

  return (
    <nav className='navbar'>
        <div className='navbar-cnt flex align-center'>
            <div className="toggler flex algn-center">
                <button type='button' 
                        className="sidebar-show-btn text-white"
                        onClick={() => dispatch(setSidebarOn())}
                        >
                    <i className='fas fa-bars'></i>
                </button>
                <Link to='/' className='navbar-brans flex align-center'> 
                    <span className='navbar-brand-icon'>
                        <i className="fa-solid fa-bag-shopping"></i>
                    </span>
                    <span className="navbar-brand-txt mx-2"></span>
                    <span className="fw-7">ALL</span>Shop <span className='fw-9'>!</span>
                </Link>
            </div>

            <div className="navbar-collapse w-100">
                <div className="navbar-search bg-white">
                    <div className='flex align-center'>
                        <input 
                            type="text" 
                            className='form-control fs-16' 
                            placeholder='Поиск'
                            onChange={(e) => handleSearchTerm(e)} />
                        <Link to={`search/${searchTerm}`} className='text-white flex align-center justify-center search-btn'>
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </Link>
                    </div>
                </div>

                <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
                   { isFetching || isLoading ? <SpinnerIcon/> :
                    categories.slice(0, 8).map((category, i) => {
                        return <li className='nav-item no-wrap text-capitalize' key={i}>
                            <Link to={`category/${category.slug}`}
                                className='nav-link hover-underline-animation'
                                >
                                    {category?.name.replace('-', ' ')}
                            </Link>
                        </li>
                    })
                   }
                </ul>
            </div>

            <div className="navbar-cart flex align-center">
                <div to='/cart' className='cart-btn'>
                    <i className='fa-solid fa-cart-shopping'></i>
                    <div className="cart-items-value">{itemsCount}</div>
                    <CartModal cart={cart}/>
                </div>
            </div>
        </div>
    </nav>
  )

}

export default Navbar