import '../../App.scss'

import { loading } from "../../utils/img";

export const SpinnerIcon = () => {
    return <i className="fa-solid fa-spinner"></i> 
}

export const Loader = () => {
    return (
        <div className="container">
            <div className="loader flex justify-center align-center">
                <img className='w-30' src={loading} alt="loading" />
            </div>
        </div>
    )
}
