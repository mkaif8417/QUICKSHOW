import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { PlayCircleIcon } from 'lucide-react'
import BlurCircle from './BlurCircle'
import { dummyTrailers } from '../assets/assets'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      {/* Title */}
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* Player */}
      <div className="relative mt-6 max-w-[960px] mx-auto">
        <BlurCircle top="-100px" right="100px" />

        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={false}
          width="100%"
          height="540px"
          className="rounded-lg overflow-hidden"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto group">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className="
              relative cursor-pointer overflow-hidden rounded-lg
              transition duration-300
              md:h-60
              group-hover:[&:not(:hover)]:opacity-50
              hover:-translate-y-1 hover:scale-[1.03]
            "
          >
            <img
              src={trailer.image}
              alt="Trailer"
              className="w-full h-full object-cover brightness-75"
            />

            <PlayCircleIcon
              className="
                absolute top-1/2 left-1/2
                w-8 h-8 md:w-12 md:h-12
                -translate-x-1/2 -translate-y-1/2
                text-white
              "
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailerSection
