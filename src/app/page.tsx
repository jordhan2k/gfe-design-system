import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-6">
      <Link href={'/components/badge'}>Badge</Link>
      <Link href={'/components/button'}>Button</Link>
    </div>
  );
}
