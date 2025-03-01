import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-5 flex justify-between items-center bg-gray-900">
      <h1 className="text-xl font-bold">Himanshu Bokey</h1>
      <div className="space-x-4">
        <Link href="#about"><a className="hover:text-gray-400">About</a></Link>
        <Link href="#projects"><a className="hover:text-gray-400">Projects</a></Link>
        <Link href="#contact"><a className="hover:text-gray-400">Contact</a></Link>
      </div>
    </nav>
  );
}