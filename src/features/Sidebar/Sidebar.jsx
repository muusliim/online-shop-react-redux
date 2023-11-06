import './sidebar.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../../app/store/sidebar-slice';
import { useGetCategoriesQuery } from '../../app/api/apiSlice';
import {  SpinnerIcon } from '../Spinner/Spinner';

function Sidebar() {
    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSidebarStatus);
    const {data: categories = [], isFetching, isLoading} = useGetCategoriesQuery();
  return (
    <aside 
        className={`sidebar ${isSidebarOn ? 'show-sidebar' : ''}`}
        >
            <button 
                type='button' 
                className='sidebar-hide-btn' 
                onClick={() => dispatch(setSidebarOff())} 
                >
                    <i className='fas fa-times'></i>
            </button>
            <div className="sidebar-cnt">
                <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
                        Все категории
                </div>
                <ul className="cat-list">
                    {isFetching || isLoading ? <SpinnerIcon/> :
                        categories.map((category, i) => {
                            return (
                             <li key={i} onClick={() => dispatch(setSidebarOff())}>
                                <Link to={`category/${category}`}
                                    className='cat-list-link text-capitalize'
                                >
                                    {category.replace('-', ' ')}
                                </Link>
                             </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
  )
}

export default Sidebar