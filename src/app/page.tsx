import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-6">
      <Link href={'/badge-component'}>Badge</Link>
      <Link href={'/button-component'}>Button</Link>
      <Link href={'/navbar-component'}>Nav bar</Link>
      <Link href={'/text-input-component'}>Text input</Link>
      <Link href={'/text-area-component'}>Text area</Link>
      <Link href={'/radio-card-component'}>Radio card</Link>
      <Link href={'/tab-menu-component'}>Tab menu</Link>
      <Link href={'/tabs-component'}>Tabs</Link>
      <Link href={'/toggle-component'}>Toggle</Link>
      <Link href={'/tooltip-component'}>Tooltip</Link>
    </div>
  );
}
