import { NavLink } from "react-router-dom"

const TopLocation = () => {
    return (
        <div>
        <div className="min-h-[20rem] mt-20 px-4 sm:px-10  flex items-center">
          <NavLink to='/locate'>
          <h1 className="text-white font-bold text-4xl sm:text-3xl lg:text-5xl ">
            Contact
          </h1>
      </NavLink>
        </div>
      </div>
    )
}

export default TopLocation