import Image from 'next/image'
import React from 'react'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl text-white mb-3 w-64">
          {title}
        </h3>
        <p className="text-white">{description}</p>

        <button className="text-md bg-white px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCard