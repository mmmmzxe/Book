
import BannerImg from "../../assets/1.png";

import React, { useState } from 'react';
import Img1 from "../../assets/FeaturedBooksImages/1.png";
import Img2 from "../../assets/FeaturedBooksImages/2.png";
import Img3 from "../../assets/FeaturedBooksImages/3.png";
import Img4 from "../../assets/FeaturedBooksImages/4.png";
import Img5 from "../../assets/FeaturedBooksImages/5.png";
import Img6 from "../../assets/FeaturedBooksImages/6.png";
import Img7 from "../../assets/FeaturedBooksImages/7.png";
import Img8 from "../../assets/FeaturedBooksImages/8.png";
import Img9 from "../../assets/FeaturedBooksImages/9.png";
import Img10 from "../../assets/FeaturedBooksImages/10.png";
import Img11 from "../../assets/FeaturedBooksImages/11.png";
import Img12 from "../../assets/FeaturedBooksImages/12.png";
import { FaStar } from "react-icons/fa6";
const Banner = () => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Sanchit Howdy",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Sanchit Howdy",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Sanchit Howdy",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Sanchit Howdy",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
 
  ];
  const ProductsData2 = [
    {
      id: 1,
      img: Img5,
      title: "Sanchit Howdy",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img6,
      title: "Sanchit Howdy",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img7,
      title: "Sanchit Howdy",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img8,
      title: "Sanchit Howdy",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
 
  ];
  const ProductsData3 = [
    {
      id: 1,
      img: Img9,
      title: "Sanchit Howdy",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img10,
      title: "Sanchit Howdy",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img11,
      title: "Sanchit Howdy",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img12,
      title: "Sanchit Howdy",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
 
  ];
  const [toggle , setToggle]=useState(1);
  function updateToggle(id){
    setToggle(id)
  }
  return (
    <div className="min-h-[px] flex justify-center items-center sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center ">
          {/* image section */}
          <div data-aos="zoom-in" className="border-2 p-5 m-10 border-pink-500">
          <div className="">
          <img
              src={BannerImg}
              alt=""
              className="max-w-[300px] w-full bg-center bg-cover bg-no-repeat m-5 object-cover"
            />
            <div className="max-w-[400px] m-3">
              <h4 className="text-pink-700 text-sm m-3">Timbur Hood</h4>
              <p className="text-black text-lg font-bold m-3">Birds gonna be happy</p>
              <p className="text-gray-500 text-sm m-3">Noura Roberts</p>
             <div className="flex m-3 "> <h1 className="font-bold">$79 <span className="span">$99</span></h1></div>
             <h2 className=" font-medium m-3">Hurry Up! Offer ends in:</h2>
             
<div className="flex justify-around m-3">
  <div className="flex mx-3">
    <h2 className="font-bold">114<span className=" text-sm mx-1 font-normal">Days</span></h2>
  </div>
<div className="border-2"></div>
  <div className="flex mx-3">
  <h2 className="font-bold">03<span className="text-sm mx-1 font-normal">Hours</span></h2>
  </div>
  <div className="border-2"></div>
  <div className="flex mx-3">
  <h2 className="font-bold">60<span className=" text-sm mx-1 font-normal">Mins</span></h2>
  </div>
  <div className="border-2"></div>
  <div className="flex mx-3">
  <h2 className="font-bold">25<span className=" text-sm mx-1 font-normal">Secs</span></h2>
  </div>

</div>
<div>
  <div className="flex justify-between m-3">
    <h1>Alieady Sold: 14</h1>
    <h1>Available: 3</h1>
  </div>
  <div className="bg-pink-200 h-[15px] rounded-md flex m-3">
    <div className="bg-pink-500 w-[250px] rounded-md">

    </div>
  </div>
</div>
            </div>
          </div>
          </div>

          {/* text details section */}
          <div className="">
            
            <div className="flex justify-between m-5">
              <h1 className="text-lx font-bold ">New Releases</h1>
              <ul className="flex ">
                <li className={toggle ===1? 'active':'click'} onClick={()=>updateToggle(1)}>On Sale</li>
                <li className={toggle ===2? 'active':'click'}  onClick={()=>updateToggle(2)}>New Arrivals</li>
                <li className={toggle ===3? 'active':'click'}  onClick={()=>updateToggle(3)}>Most Viewed</li>
              </ul>
            </div>
           <div>
          
       
          
          </div>
          <div>
          <div className={toggle === 1? 'Show-context':'context'}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-2">
            {/* card section */}
            {ProductsData2.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-1"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[150px] w-[100px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-pink-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
          
        </div>
        <div className={toggle === 2 ? 'Show-context':'context'}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-2">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-1"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[150px] w-[100px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-pink-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
          
        </div>
        <div className={toggle === 3 ? 'Show-context' : 'context'}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-2">
            {/* card section */}
            {ProductsData3.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-1"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[150px] w-[100px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-pink-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
          
        </div>
          </div>
           </div>
           
     
          </div>
        </div>
      </div>
  
  );
};

export default Banner;
