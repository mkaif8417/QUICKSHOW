import React from "react";
import Title from "./admin/Title";
import BlurCircle from "./BlurCircle";

const theaters = [
  {
    name: "PVR Superplex",
    address: "Inorbit Mall, Cyberabad",
    map: "https://www.google.com/maps/place/Inorbit+Mall,+Cyberabad",
    type: "Multiplex",
    status: "Open"
  },
  {
    name: "BR HiTech Theater",
    address: "Cyberabad",
    map: "https://www.google.com/maps/search/BR+HiTech+Theater,+Cyberabad",
    type: "Private Theater",
    status: "Closed"
  },
  {
    name: "PVR ICORN",
    address: "Inox Prism Mall, Hyderabad",
    map: "https://www.google.com/maps/place/Inox+Prism+Mall,+Hyderabad",
    type: "Multiplex",
    status: "Open"
  },
  {
    name: "Binge's Bash",
    address: "Private Theater",
    map: "#",
    type: "Private Theater",
    status: "Open"
  },
  {
    name: "PVR RK Cineplex",
    address: "Hyderabad",
    map: "https://www.google.com/maps/search/PVR+RK+Cineplex,+Hyderabad",
    type: "Multiplex",
    status: "Closed"
  },
  {
    name: "INOX City Center",
    address: "Hyderabad",
    map: "https://www.google.com/maps/place/INOX+City+Center,+Hyderabad",
    type: "Multiplex",
    status: "Open"
  },
  {
    name: "Cinepolis GVK",
    address: "GVK One Mall, Hyderabad",
    map: "https://www.google.com/maps/place/Cinepolis+GVK+One,+Hyderabad",
    type: "Multiplex",
    status: "Open"
  },
  {
    name: "Prasads IMAX",
    address: "Prasads Multiplex, Hyderabad",
    map: "https://www.google.com/maps/place/Prasads+IMAX,+Hyderabad",
    type: "Multiplex",
    status: "Closed"
  }
];

const Theaters = () => {
  return (
    <>
      <main className="pt-24 px-4 sm:px-6 md:px-12 lg:px-32 bg-black min-h-screen text-white">
        <BlurCircle top="-80px" right="80px"/>
        <BlurCircle bottom="80px" left="80px"/>

        {/* Header */}
        <Title text1="Nearest" text2="Theaters"/>

        {/* Theater List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {theaters.map((theater, index) => (
            <li
              key={index}
              className="p-5 sm:p-6 bg-gray-900 rounded-xl shadow-lg flex flex-col justify-between border border-gray-800 transition-transform sm:hover:-translate-y-1"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-red-400">
                  {theater.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-1">{theater.address}</p>
                <p className="text-gray-400 italic text-sm sm:text-base">{theater.type}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span
                  className={`font-bold text-sm sm:text-base ${
                    theater.status === "Open" ? "text-green-400" : "text-red-500"
                  }`}
                >
                  {theater.status}
                </span>
                <a
                  href={theater.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm sm:text-base bg-red-400 text-black rounded hover:bg-red-500 transition"
                >
                  Map
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Theaters;
