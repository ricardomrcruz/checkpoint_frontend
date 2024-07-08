import Link from "next/link";
import {
  useAddCountryMutation,
  useCountriesSimpleQuery,
} from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState, useEffect } from "react";
import React from "react";

export default function Form() {
  const [addCountry] = useAddCountryMutation();
  const router = useRouter();
  const { data, loading, error } = useCountriesSimpleQuery();
  const [countries, setCountries] = useState(data?.countries || []);

  useEffect(() => {
    if (data?.countries) {
      setCountries(data.countries);
    }
  }, [data]);

  //dynamic render
  const newCountryInList = (newCountry: any) => {
    setCountries((countries) => [...countries, newCountry]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());

    console.log("Form Data:", formJSON);

    try {
      const res = await addCountry({ variables: { data: formJSON } });

      if (res.data?.addCountry) {
        newCountryInList(res.data.addCountry);
      }
    } catch (error) {
      console.error("error adding new country", error);
    }
  };

  return (
    <div>
      <div className="m-auto w-4/5 bg-[#F2F2F2] p-20 text-center my-5 ">
        <form className="flex m-auto justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col text-left mx-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              required
              name="name"
              id="name"
              className="border-2 border-gray-300"
            />
          </div>
          <div className="flex flex-col text-left mx-4">
            <label htmlFor="emoji">Emoji</label>
            <input
              type="text"
              required
              name="emoji"
              id="emoji"
              className="border-2 border-gray-300"
            />
          </div>
          <div className="flex flex-col text-left mx-4">
            <label htmlFor="code">Code:</label>
            <input
              type="text"
              required
              name="code"
              id="code"
              className="border-2 border-gray-300"
            />
          </div>
          <div>
            <button
              type="submit"
              className="p-4 bg-[#E56282] rounded ml-8 text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="m-auto w-4/5 bg-[#F2F2F2] p-20 text-center my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 justify-center ">
        {countries.map((country: any) => (
          <div
            key={country.id}
            className="flex flex-col text-left mnx-4 bg-white border-gray-100 border-2 p-10 shadow-lg rounded-lg"
          >
            <Link href={`/countries/${country.code}`}>
              <span className="text-2xl mb-4 font-emoji">{country.emoji}</span>
              <h1 className="text-xl font-semibold mb-2">{country.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
