import { NavLink } from "react-router-dom"


const TopBuilding = () => {
  return (
    <div className="min-h-[20rem] mt-20 px-4 sm:px-10  flex items-center">
    <NavLink to='/about/values'>
    <h1 className="text-white font-bold text-4xl sm:text-3xl lg:text-5xl ">
       Project
      </h1>
    </NavLink>
  </div>
  )
}

export default TopBuilding