import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard';

function Search({ searchResult }) {
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
            300+ Stays - {range} - for {numOfGuests} guests
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
            {searchResult.map(({ img, location, title, description, star, price, total }) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch('https://links.papareact.com/isz')
    .then(res => res.json());

  return {
    props: {
      searchResult,
    },
  };
};