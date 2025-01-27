import { NavLink, useNavigate } from "react-router-dom";
import { BuildingData } from "../../utils/contentData";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


// Assuming DesignData is properly typed elsewhere
interface BuildingItem {
  image: string;
  title: string;
  location: string;
  building:string;
  description?: string; 
  addImage: string[];
}

const ITEMS_PER_PAGE = 6;

const MainBuilding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(BuildingData.length / ITEMS_PER_PAGE);

  // Calculate paginated items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const showItems = BuildingData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  type direction = "next" | "prev";

  // Handler for pagination
  const handlerPerChange = (direction: direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //Navigate to details page oncard click
  const handleCardClick = (item: BuildingItem) => {
    navigate("/project/details", {state: {item}});
  }
  

  return (
    <div className="flex flex-col gap-6 lg:flex-row justify-between bg-[--text-extra] px-6 sm:px-12 lg:px-20 py-10">
      {/* Navigation Section */}
      <div className="w-full bg-[--layer-colo] lg:w-1/2 h-[25rem] px-4 lg:px-8 sm:grid hidden">
        <div className="py-16">
          <ol className="space-y-2">
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/project/design" className="hover:scale-110">Design Project</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/project/building" className="hover:scale-110 font-bold text-[--bg-color]">Building Project</NavLink>
            </li>
          </ol>
        </div>
      </div>

      {/* Write-up Section */}
      <div className="w-full bg-[--text-extra] lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 lg:mx-5">
        <h2 className="text-2xl font-bold border-b-[4px] border-[--bg-color] pb-3">Latest Building Project</h2>

        <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay Section */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold">{item.title} </h3>
                <p className="text-sm">{item.building}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => handlerPerChange("prev")}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[--bg-color] rounded hover:bg-gray-400 disabled:opacity-50"
          >
            <IoChevronBack color="#fff" />
          </button>
          <button
            onClick={() => handlerPerChange("next")}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[--bg-color] rounded disabled:opacity-50"
          >
            <IoChevronForward color="#fff" />
          </button>
        </div>

     
      </div>
    </div>
  );
};

export default MainBuilding;