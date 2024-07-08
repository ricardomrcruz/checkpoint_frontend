import Link from "next/link";
import React from "react";
import { useCountryQuery } from "@/graphql/generated/schema";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";

export default function CountriesBox() {
  const router = useRouter();

  const { code } = router.query;

  const { data } = useCountryQuery({
    variables: { code: code as string },
    skip: typeof code === "undefined",
  });

  const country = data?.country;
  if (!country) {
    return <div>No country found for the given code.</div>;
  }

  return (
    <div className="">
      <Header />
      <div className="flex items-center justify-center  bg-[#F2F2F2]">
        <div className="w-full max-w-md p-10 text-center my-10 m-auto">
          <div className="flex flex-col text-left mx-4 bg-white border-gray-100 border-2 p-10 shadow-lg rounded-lg">
            <span className="text-2xl mb-4 font-emoji">
              Name: {country.emoji}
            </span>
            <h1 className="text-xl font-semibold mb-2">
              Continent: {country.name}
            </h1>
            <h2 className="text-xl font-semibold mb-2">
              {country.continent?.name}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
