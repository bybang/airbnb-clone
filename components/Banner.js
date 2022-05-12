import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/d3f25640-6035-4e50-adaa-cb1f26ee0685.jpg?im_w=1440"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          Let your curiosity do the booking
        </p>
        <button
          className="text-purple-500 bg-gray-100 rounded-full px-10 py-4 shadow-neutral-600 shadow-md font-bold my-7 hover:shadow-xl hover:shadow-neutral-500 active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  )
}

export default Banner