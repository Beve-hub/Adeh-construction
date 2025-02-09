import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MdCancel } from "react-icons/md";


interface DesignItem {
  image: string;
  title: string;
  location: string;
  desc?: string;
  building: string;
  client: string;
  addImage: string[];
}


const Details = () => {
  const {state} = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [showModal, setShowModal] = useState<boolean>(false);

  const selectedCard: DesignItem = state?.item;

  // Handler when an image is clicked
  const handleImageClick = (image: string) => {
    setSelectedImage(image); // set the clicked image to be displayed in full
    setShowModal(true); // Show the modal
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="w-full  bg-[--text-extra] flex justify-center items-center mt-24 lg:px-20">
      <div className="grid justify-center items-center  bg-white p-6">
        <div className="my-4">
        <h2 className="font-bold text-2xl mb-2">{selectedCard.title}  </h2>
          <div className="flex gap-2 item-center">
          <p className="text-gray-600">{selectedCard.location}</p>.
          <p>{selectedCard.building}</p>
          </div>
        
        
        </div>


        <div className="flex  flex-col md:flex-row gap-4">
          <div className="w-full md:w-3/5">
            <img
            src={selectedCard.image}
            alt=""
            className="w-[90rem]  h-[35rem] object-cover"
            />
          </div>
          <div 
          className="w-full md:w-1/5 grid grid-cols-4 sm:grid-cols-3 gap-4 md:flex md:flex-col"
          >
            {selectedCard.addImage.slice(0,4).map((Image,index) => (
              <img 
              key={index}
              src={Image}
              alt={`add-image-${index}`}
                className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all"
                onClick={() => handleImageClick(Image)}
              />
            ))}
          </div>
         </div>  


         <div className=" items-start mt-4">
          <h3 className=" "><span className="font-bold">Projet:</span> {selectedCard.title}</h3>
          <p className="text-gray-600"><span className="font-bold">Client:</span> {selectedCard.client}</p>
          <p className="text-gray-600"><span className="font-bold">Structure Type:</span> {selectedCard.building}</p>
          <p className="text-gray-600"><span className="font-bold">Location: </span>{selectedCard.location}</p>
          <p><span className="font-bold">Description:</span> {selectedCard.desc}</p>
        </div>


        {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg">
          <div className="my-4">
              <h3 className="font-bold">{selectedCard.title}</h3>
              <p className="text-gray-600">{selectedCard.location}</p>
          </div>
            <img
              src={selectedImage}
              alt="full-screen"
              className="w-[36rem] h-[26rem] object-cover"
            />
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
              aria-label="Close modal"
            >
              <MdCancel size={24} />
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Details