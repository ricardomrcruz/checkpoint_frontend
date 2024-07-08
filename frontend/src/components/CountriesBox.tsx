import Link from "next/link";
import React from "react";
import { useCountriesSimpleQuery } from "@/graphql/generated/schema";
import { useEffect, useState } from "react";

export default function CountriesBox() {
  const { data } = useCountriesSimpleQuery();
  const [countries, setCountries] = useState(data?.countries || []);

  useEffect(() => {
    if (data?.countries) {
      setCountries(data.countries);
    }
  }, [data]);

  const handleCountryAdded = (newCountry: any) => {
    setCountries((prevCountries) => [...prevCountries, newCountry]);
  };

  return (
    <div className="m-auto w-4/5 bg-[#F2F2F2] p-20 text-center my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 justify-center ">
      {countries.map((country) => (
        <div
          key={country.id}
          className="flex flex-col text-left mx-4 bg-white border-gray-100 border-2 p-10 shadow-lg rounded-lg"
        >
          <Link href={`/countries/${country.code}`}>
            <span className="text-2xl mb-4 font-emoji">{country.emoji}</span>
            <h1 className="text-xl font-semibold mb-2">{country.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
