import Link from "next/link";

const components = [
  { href: '/components/badge', title: 'Badge' },
  { href: '/components/button', title: 'Button' },
  { href: '/components/navbar', title: 'Nav bar' },
  { href: '/components/text-input', title: 'Text input' },
  { href: '/components/text-area', title: 'Text area' },
  { href: '/components/radio-card', title: 'Radio card' },
  { href: '/components/tab-menu', title: 'Tab menu' },
  { href: '/components/tabs', title: 'Tabs' },
  { href: '/components/toggle', title: 'Toggle' },
  { href: '/components/tooltip', title: 'Tooltip' },
  { href: '/components/checkbox', title: 'Checkbox' },
  { href: '/components/pagination', title: 'Pagination' },
  { href: '/components/dropdown-menu', title: 'Dropdown menu' },
  { href: '/components/modal-dialog', title: 'Modal dialog' },
  { href: '/components/toast', title: 'Toast' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 gap-6 overflow-y-auto">
      {components.map(({ href, title }) => (
        <Link key={href} href={href} className="text-blue-600 hover:underline">
          {title}
        </Link>
      ))}
    </div>
  );
}
