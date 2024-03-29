import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon
} from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    if (!searchInput) return;

    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      }
    });

    setSearchInput("");
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };


  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push('/')}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Center */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 truncate"
          type="text"
          placeholder={placeholder || "Where are you going?"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && search()}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host!</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UserIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400" type="number"
              value={numOfGuests}
              min={1}
              onChange={e => setNumOfGuests(e.target.value)}
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className="flex-grow text-red-400"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header