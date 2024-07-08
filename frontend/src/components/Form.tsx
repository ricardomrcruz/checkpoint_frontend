import Link from "next/link";

export default function Form() {
  return (
    <div className="m-auto w-4/5 bg-[#F2F2F2] p-20 text-center my-10 ">
      <form className="flex m-auto justify-center" action="">
        <div className="flex flex-col text-left mx-4">
          <label htmlFor="">Name:</label>
          <input type="text" className="border-2 border-gray-300" />
        </div>
        <div className="flex flex-col text-left mx-4">
          <label htmlFor="">Emoji</label>
          <input type="text" className="border-2 border-gray-300" />
        </div>
        <div className="flex flex-col text-left mx-4">
          <label htmlFor="">Code:</label>
          <input type="text" className="border-2 border-gray-300" />
        </div>
        <div>
          <button className="p-4 bg-[#E56282] rounded ml-8 text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
