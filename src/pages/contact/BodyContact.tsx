import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
const BodyContact = () => {
  return (
    <section className="bg-[--text-extra] grid  lg:grid-cols-2 justify-between sm:px-6 py-8 lg:py-10 ">
      {/* Contact Information */}
      <div className="space-y-8 px-8">
        <p className="text-2xl sm:text-3xl font-semibold">How to reach us</p>
        <p className="text-gray-700">
          Block H3F, Ist Floor Sterling Towers Marina Lagos Nigeria
        </p>
        <div className="flex items-center gap-2 mt-4">
        <MdWhatsapp size={24} className="text-[--bg-color]" />
          
         <div className="flex gap-2">
          <p className="text-gray-900 font-medium border-r-2 border-[--text-color] pr-4">+234 8074 668 779</p>
          <p className="text-gray-900 font-medium border-r-2 border-[--text-color] pr-4">+234 8068 210 791</p>
          <p className="text-gray-900 font-medium ">+234 9074 781 256</p>
          </div>
         
        </div>
        <div className="flex items-center gap-2 mt-4">
          <MdOutlineEmail size={24} className="text-[--bg-color]" />
          <p className="text-gray-900 font-medium">adehconstructioncompany@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <TbWorld size={24} className="text-[--bg-color]" />
          <p className="text-gray-900 font-medium">www.adehconstructioncompany.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-2xl sm:text-3xl font-semibold">Send a message</p>
        <form className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label htmlFor="number" className="block text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Enter your phone number"
              className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Write your message here..."
              className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-[--bg-color] text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default BodyContact;
