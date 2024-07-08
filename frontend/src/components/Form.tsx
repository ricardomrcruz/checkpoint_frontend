import Link from "next/link";
import { useAddCountryMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Form() {
  const [addCountry] = useAddCountryMutation();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());

    console.log("Form Data:", formJSON);

    await addCountry({ variables: { data: formJSON } }).then((res) => {
      router.reload();
    });
  };

  return (
    <div className="m-auto w-4/5 bg-[#F2F2F2] p-20 text-center my-10 ">
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
  );
}
