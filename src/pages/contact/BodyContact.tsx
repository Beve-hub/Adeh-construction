import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const BodyContact: React.FC = () => {
  return (
    <div className="bg-[--text-extra] flex flex-col gap-6 lg:flex-row justify-between px-6 sm:px-12 lg:px-20 py-10">
      <div>
        <p className="text-3xl">Send a message</p>
        <form>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="border-b block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"                  
                  className="border-b block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 mt-4">
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="number"
                className="border-b block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="col-span-full mt-4">
            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
              Message
            </label>
            <div className="mt-2">
           
              <textarea
                name="about"
                id="about"
                placeholder="Write a few sentences about yourself."
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 text-sm focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border-b"
              ></textarea>
            </div>            
          </div>
          <button className="mt-2 bg-[--bg-color] text-[--text-extra]">Submit</button>
        </form>
      </div>
      <div>
        <p className="text-3xl">How to reach us</p>
        <p>Block H3F, Ist Floor Sterling Towers
        Marina Lagos Nigeria</p>
        <div className="flex item-center text-center gap-2 mt-4">
          <p><MdAddIcCall size={24}/></p>
          <p>+234 9066 037 029</p>
        </div>
        <div className="flex item-center text-center gap-2 mt-4">
          <p><MdEmail size={24}/></p>
          <p>+234 9066 037 029</p>
        </div>
      </div>
    </div>
  );
};

export default BodyContact;
