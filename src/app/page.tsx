import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-6">
      <Link href={'/badge-component'}>Badge</Link>
      <Link href={'/button-component'}>Button</Link>
      <Link href={'/navbar-component'}>Nav bar</Link>
      <Link href={'/text-input-component'}>Text input</Link>
      <Link href={'/text-area-component'}>Text area</Link>
    </div>
  );
}
