function Card({ image, country, maplink, place, date, description }) {
  return (
    <div className="xxs:w-[90%] xxs:flex-wrap xxs:gap-5 xxs:p-5 mx-auto mb-6 flex flex-row rounded-2xl border-2 border-gray-300 bg-gray-100 shadow-md sm:w-[75%] md:flex-nowrap md:gap-10 md:p-8 lg:w-[65%] lg:gap-16">
      <img src={image} alt="" className="w-72 rounded-xl drop-shadow-md" />

      <div>
        <div>
          <div className="flex flex-row flex-wrap items-baseline gap-5">
            <h1 className="uppercase underline decoration-[#F55A5A] underline-offset-4 sm:text-lg md:text-xl lg:text-2xl">
              {country}
            </h1>
            <a href={maplink} target="_blank" className="hover:text-blue-700">
              View on Google Maps (➚)
            </a>
          </div>
          <h1 className="xxs:text-2xl mt-2 font-bold md:text-3xl lg:text-4xl">
            {place}
          </h1>
        </div>

        <br />

        <div>
          <h4 className="font-semibold">{date}</h4>
          <p className="mt-2 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
