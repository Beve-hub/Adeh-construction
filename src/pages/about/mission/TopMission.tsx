
import { NavLink } from 'react-router-dom';

const TopMission = () => {
  return (
    <div className="min-h-[20rem] mt-20 px-4 sm:px-10  flex items-center">
    <NavLink to='/about/mission'>
    <h1 className="text-white font-bold text-4xl sm:text-3xl lg:text-5xl ">
        Our Mission
      </h1>
    </NavLink>
  </div>
  )
}

export default TopMission