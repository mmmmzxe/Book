import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/FeaturedBooksImages/1.png";
import Img2 from "../../assets/FeaturedBooksImages/2.png";
import Img3 from "../../assets/FeaturedBooksImages/3.png";
import Img4 from "../../assets/FeaturedBooksImages/4.png";
const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "the rural diaries:love, ",    img:Img1 ,
    price:20
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "the rural diaries:love, ",
    img: Img2,
    price:30
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "the rural diaries:love, ",
        img: Img3,
        price:40
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "the rural diaries:love, ",
        img: Img4,
        price:60
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[700px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-pink-500">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Biographies Books
          </h1>

        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-row gap-3 shadow-lg py-8 px-6 mx-4 rounded-xl  relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className=" w-36 h-36"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <h1 className="text-pink-500 text-sm ">
                        {data.name}
                      </h1>
                      <p className="text-sm font-bold text-black/80">{data.text}</p>
                      <p className="text-sm  text-gray-500">{data.text}</p>
                      <h1 className="text-pink-500 text-sm font-bold ">
                        {data.price}$
                      </h1>
                    </div>
                  </div>
                 
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
