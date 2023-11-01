import './navbar.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSidebarOn } from '../../../app/store/sidebar-slice';
import { useGetCategoriesQuery } from '../../../app/api/apiSlice';
import { SpinnerIcon } from '../../Spinner/Spinner';


function Navbar() {
    const dispatch = useDispatch();

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
                        <input type="text" className='form-control fs-16' placeholder='Поиск' />
                        <Link to='' className='text-white flex align-center justify-center search-btn'>
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </Link>
                    </div>
                </div>

                <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
                   { isFetching || isLoading ? <SpinnerIcon/> :
                    categories.slice(0, 8).map((item, i) => {
                        return <li className='nav-item no-wrap text-capitalize' key={i}>
                            <Link to={`category/${item}`}
                                className='nav-link hover-underline-animation'
                                >
                                    {item.replace('-', ' ')}
                            </Link>
                        </li>
                    })
                   }
                </ul>
            </div>

            <div className="navbar-cart flex align-center">
                <Link to='/cart' className='cart-btn'>
                    <i className='fa-solid fa-cart-shopping'></i>
                    <div className="cart-items-value">0</div>
                </Link>
            </div>
        </div>
    </nav>
  )

}

export default Navbar