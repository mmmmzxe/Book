import React from "react";

import Img1 from "../../assets/users/1.jpg";
import Img2 from "../../assets/users/2.jpg";
import Img3 from "../../assets/users/3.jpg";
import Img4 from "../../assets/users/4.jpg";
import Img5 from "../../assets/users/5.jpg";
import Img6 from "../../assets/FeaturedBooksImages/6.png";
import Img7 from "../../assets/FeaturedBooksImages/7.png";
import Img8 from "../../assets/FeaturedBooksImages/8.png";
import Img9 from "../../assets/FeaturedBooksImages/9.png";
import Img10 from "../../assets/FeaturedBooksImages/10.png";
import Img11 from "../../assets/FeaturedBooksImages/11.png";
import Img12 from "../../assets/FeaturedBooksImages/12.png";
import Img13 from "../../assets/FeaturedBooksImages/13.png";
import Img14 from "../../assets/FeaturedBooksImages/1.png";
import Img15 from "../../assets/FeaturedBooksImages/2.png";
import Img16 from "../../assets/FeaturedBooksImages/3.png";
import Img17 from "../../assets/FeaturedBooksImages/4.png";
import Img18 from "../../assets/FeaturedBooksImages/5.png";

const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "white",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img6,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img8,
    title: "Sanchit Howdy",
      rating: 'books show',  
        suptitel: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img9,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "Yellow",
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img10,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "Yellow",
    aosDelay: "300",
  },
  {
    id: 7,
    img: Img11,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "Yellow",
    aosDelay: "150",
  },
  {
    id: 8,
    img: Img12,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "Yellow",
    aosDelay: "250",
  },
  {
    id: 9,
    img: Img13,
    title: "Sanchit Howdy",
    rating: 'books show',
    suptitel: "Yellow",
    aosDelay: "600",
  },


];
const ProductsData3 = [
  {
    id: 1,
    img: Img1,
    title: "Sanchit Howdy",
    suptitel: "white",
    aosDelay: "Books",
  },
  {
    id: 2,
    img: Img2,
    title: "Sanchit Howdy",
    suptitel: "Red",
    aosDelay: "Books",
  },
  {
    id: 3,
    img: Img3,
    title: "Sanchit Howdy",
    suptitel: "brown",
    aosDelay: "Books",
  },
  {
    id: 4,
    img: Img4,
    title: "Sanchit Howdy",
    suptitel: "Yellow",
    aosDelay: "Books",
  },
  {
    id: 5,
    img: Img2,
    title: "Sanchit Howdy",
    suptitel: "Pink",
    aosDelay: "Books",
  },
];
const ProductsData = [
  {
    id: 1,
    img: Img14,
    title: "Sanchit Howdy",
    suptitel: "white",
    aosDelay: "150",
  },
  {
    id: 2,
    img: Img15,
    title: "Sanchit Howdy",
    suptitel: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img16,
    title: "Sanchit Howdy",
    suptitel: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img17,
    title: "Sanchit Howdy",
    suptitel: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img18,
    title: "Sanchit Howdy",
    suptitel: "Pink",
    aosDelay: "800",
  },
];

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="m-10 p-5 flex"
    
    >
      <div>
      <div className="w-[350px] m-5">
        <div className="">
         <h1 className="font-bold text-lg">Top Rating</h1>
         <div>
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 m-2 border-2 p-5 gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 flex"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[100px] w-[100px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.suptitel}</p>
                  <h2 className="font-bold">{data.aosDelay}$</h2>
                  
                </div>
              </div>
            ))}
          </div>
         </div>
        </div>
      </div>
      <div className="w-[350px] m-5">
        <div className="">
         <h1 className="font-bold text-lg">Favourite Auther</h1>
         <div>
         <div className="grid grid-cols-1 p-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 m-2 border-2 gap-5">
            {/* card section */}
            {ProductsData3.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 flex "
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[80px] w-[80px] object-cover rounded-full p-2"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.suptitel}</p>
                  <h2>{data.aosDelay}</h2>
                  
                </div>
              </div>
            ))}
          </div>
         </div>
        </div>
      </div>
      </div>



      <div className="w-[700px] m-7">
        <h1 className="font-bold text-lg">Featured Books</h1>
      <div className="grid grid-cols-1 p-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-10">
            {/* card section */}
            {ProductsData2.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="p-5 border-2"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[250px] w-[170px] object-cover rounded-md"
                />
                <div>
                  <p className="text-pink-500 text-sm m-2">{data.rating}</p>
                  <h3 className="font-semibold m-2">{data.title}</h3>
                  <p className="text-sm m-2 text-gray-600">{data.suptitel}</p>
                  <h2 className="m-2 font-bold">{data.aosDelay}$</h2>
                 
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Subscribe;
