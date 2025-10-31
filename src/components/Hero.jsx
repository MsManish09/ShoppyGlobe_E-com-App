import { useState, useEffect } from "react";

function Hero() {
  const banners = [
    {
      name: "main",
      image: "src/utils/heroSection/shoppyGlobe_hero_banner.webp",
    },
    {
      name: "diwali promotional banner",
      image: "src/utils/heroSection/shoppyGlobal_diwali_promo_banner.webp",
    },
    {
      name: "global store banner",
      image: "src/utils/heroSection/shoppyGlobe_globalStore_banner.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide every 2 seconds
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 2500)

    return () => clearInterval(interval); // infinite scrollingg.

  }, [banners.length]) // when more banners are added, the component re-render to add the new banner

  return (
    
      <div
        className=" flex transition-transform duration-1000 ease-in-out gap-6 "
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${banners.length * 100}%` }}> {/* to make sure that there is enough widht for all banners w = 3 * 100 -> 300%  */}

        {
            banners.map((banner, index) => (
                <div key={index} className=" w-full flex-shrink-0 ">
                    <img src={banner.image} alt={banner.name}  className=" w-full lg:h-[350px]  object-container rounded-[15px] shadow-2xl " />
                </div>
            ))
        }
      </div>
  );
}

export default Hero;
