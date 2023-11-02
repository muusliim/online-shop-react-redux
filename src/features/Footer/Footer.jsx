import './footer.scss';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const text = ['Политика конфиденциальности', "Пользовательское соглашение", "О нас"]
  return (
    <footer className='footer bg-orange'>
        <div className='container py-4 text-center'>
            <div className="flex align-center justify-center text-white fw-3 fs-11">
                {text.map((item, i) => {
                    return (
                    <Fragment key={item}>
                    <Link to='/'  className='text-uppercase'>
                        {item}
                     </Link>
                     {i !== text.length - 1 ? <div className="vert-line"></div>  : null}
                    </Fragment>
                    )
                })}
            </div>
            <span className="text-white copyright-text text-manrope fs-14 fw-3">
                &copy; 2023 'ALLShop!' Все права сохранены
            </span>
        </div>
    </footer>
  )
}

export default Footer