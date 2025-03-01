import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center p-10">
      <Image src="/profile.jpg" width={200} height={200} className="rounded-full mx-auto" alt="Himanshu Bokey" />
      <h2 className="text-3xl mt-4">I’m Himanshu Bokey</h2>
      <p className="text-gray-400">A passionate developer & hacker</p>
    </section>
  );
}