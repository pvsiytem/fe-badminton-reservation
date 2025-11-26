import Image from "next/image";

export const heading1 = (
  <div className="space-y-10">
    <div>
      <h1 className="font-heading leading-tight text-black dark:text-white text-4xl md:text-5xl lg:text-6xl">
        Find Your Best Badminton Venue Here!
      </h1>

      <p className="text-[#4A4A4A] dark:text-gray-300 mt-6 max-w-md font-normal text-lg">
        Experience the best badminton courts in town with our seamless online reservation system. 
        Book your court in just a few clicks!
      </p>
    </div>
  </div>
);

export const section2 = (
  <div className="relative overflow-hidden">
    <div className="flex space-x-6 animate-scroll">
      {[1, 2, 3, 1, 2, 3].map((num, index) => (
        <div
          key={index}
          className="flex-shrink-0 rounded-2xl overflow-hidden h-48 md:h-56 lg:h-64 shadow-md dark:shadow-gray-900 w-64 md:w-72"
        >
          <Image
            src={`/images/hero${num}.jpg`}
            alt={`Badminton Court ${num}`}
            width={400}
            height={400}
            className="img scale-animation w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
    
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent"></div>
    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent"></div>
  </div>
);