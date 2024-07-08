import Link from "next/link";

export default function CountriesBox() {
  return (
    <div className="m-auto w-4/5 bg-[#F2F2F2] p-20 text-center my-10 flex  justify-center ">
      <div className="flex flex-col text-left mx-4 bg-white border-gray-100 border-2 p-10 shadow-lg rounded-lg">
        <span className="text-2xl mb-4">emoji</span>
        <h1 className="text-xl font-semibold mb-2">Name</h1>
      </div>
    </div>
  );
}
