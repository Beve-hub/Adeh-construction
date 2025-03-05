import { NavLink } from 'react-router-dom';
const TopTeam = () => {

  return (
    <div className="min-h-[20rem] px-4 sm:px-10 mt-20 flex items-center">
        <NavLink to='/about/team'>
        <h1 className="text-white font-bold text-4xl sm:text-3xl lg:text-5xl ">
            Our Team
          </h1>
        </NavLink>
      </div>
  )
}

export default TopTeam