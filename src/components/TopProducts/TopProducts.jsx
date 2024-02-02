import React from "react";

import icon1 from '../../assets/icon/1.png'
import icon2 from '../../assets/icon/2.png'
import icon3 from '../../assets/icon/3.png'
import { FaPen } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: icon1,
    titel:'Quality books',
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: icon2,
    titel:'Fast Delivery ',
    description:

      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
   img: icon3,
   titel:'Easy Payment method',
  
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
   img: icon3,
   titel:'Get Offers',
  
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
        
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-1xl bg-white  hover:text-pink-700 relative shadow-xl duration-300 group max-w-[200px]"
            >
              {/* image section */}
              <div className="h-[50px]">
                <img src={data.img}
                
                  className="max-w-[50px] block mx-auto transform -translate-y-15 group-hover:scale-100 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
               <h1>{data.titel}</h1>
                <p className="text-gray-500  duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
