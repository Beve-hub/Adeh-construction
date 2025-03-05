
import { NavLink } from 'react-router-dom';

const Top = () => {
    return (
        <div className="min-h-[20rem] mt-20  px-4 sm:px-10  flex items-center">
    <NavLink to='/service'>
    <h1 className="text-white font-bold text-4xl sm:text-3xl lg:text-5xl ">
        Service
      </h1>
    </NavLink>
  </div>
    )
}

export default Top
