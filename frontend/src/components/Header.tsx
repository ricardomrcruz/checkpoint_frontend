import Link from "next/link";

export default function Header() {
  return (
    <header className="m-auto bg-[#E56282] p-20 text-center text-white">
      <h1 className="mb-4 font-bold text-2xl">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
