import Link from "next/link";
import React from "react";
import { useCountryQuery } from "@/graphql/generated/schema";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <div className="m-auto w-4/5 bg-[#F2F2F2] p-20 text-center my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 justify-center ">
      <div className="flex flex-col text-left mx-4 bg-white border-gray-100 border-2 p-10 shadow-lg rounded-lg">
        <span className="text-2xl mb-4 font-emoji">Name: {country.emoji}</span>
        <h1 className="text-xl font-semibold mb-2">
          Continent: {country.name}
        </h1>
        <h2 className="text-xl font-semibold mb-2">
          {country.continent?.name}
        </h2>
      </div>
    </div>
  );
}
