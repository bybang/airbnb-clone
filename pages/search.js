import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard';
import Mapbox from '../components/Mapbox';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "do MMMM yy");
  const formattedEndDate = format(new Date(endDate), "do MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - <span className="bg-red-300 px-2 py-1 border rounded-md">{range}</span> - for {numOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filterBtn">
              Cancellation Flexibility
            </p>
            <p className="filterBtn">Type of Place</p>
            <p className="filterBtn">Price</p>
            <p className="filterBtn">Rooms and Beds</p>
            <p className="filterBtn">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
        </section>

        <section className="hidden lg:inline-flex lg:min-w-[600px]">
          <Mapbox searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/1A4G')
    .then(res => res.json());

  return {
    props: {
      searchResults,
    },
  };
};